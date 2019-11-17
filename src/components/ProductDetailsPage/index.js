import styles from './index.module.css';
import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { Image, Grid, Icon, Button } from 'semantic-ui-react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import {
  addToCart,
  addAnotherCartItem
} from '../../actionCreator/cartActions';

const ProductDetailsPage = () => {
  const { id } = useParams();
  return <ProductDetails id={id} />;
};

class ProductDetailsBase extends React.Component {
  state = {
    data: {}
  };

  handleClick = e => {
    const { data } = this.state;
    const idArr = this.props.cart
      ? this.props.cart.map(item => item.id)
      : [];
    idArr.includes(data.id)
      ? this.props.addAnotherCartItem(data)
      : this.props.addToCart({ ...data, quantity: 1 });
  };

  componentWillMount() {
    const { id } = this.props;
    this.setState({ id });

    this.props.firebase.getProduct(id).then(async doc => {
      if (doc.exists) {
        let data = doc.data();
        this.setState({ data, quantity: 0 });
      } else {
        console.log('No DOC');
      }
    });
  }

  render() {
    const { href, name, description, price } = this.state.data;

    return (
      <Wrapper>
        <Grid className={styles.grid} centered>
          <Grid.Column width={6}>
            <Image src={href} />
          </Grid.Column>
          <Grid.Column width={5}>
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Odit veritatis eos eaque, velit ipsam sint amet
              voluptatem impedit, expedita beatae eum explicabo
              repellat iste dolorum natus tempora et odio alias
              accusamus ut praesentium atque dolor magni quia?
              Mollitia eum voluptatibus eius eveniet nam nobis ipsa
              aperiam quia, quae debitis porro! Laboriosam in iusto
              esse expedita aut magnam vitae vero corrupti.
            </p>
          </Grid.Column>
          <Grid.Column width={3}>
            <h4>
              <Icon name="pound" />
              {price}
            </h4>
            <Button
              css={css``}
              size="huge"
              onClick={this.handleClick}
            >
              Buy Now
            </Button>
            <Link to="/checkout">
              <Button size="huge">Checkout</Button>
            </Link>
          </Grid.Column>
        </Grid>
      </Wrapper>
    );
  }
}

const Wrapper = Styled.div`
    margin-top: 150px;


`;
const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
  addAnotherCartItem: item => dispatch(addAnotherCartItem(item))
});

const ProductDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(withFirebase(ProductDetailsBase));

export default ProductDetailsPage;
