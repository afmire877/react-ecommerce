import styles from './index.module.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { Image, Grid } from 'semantic-ui-react';
import Styled from 'styled-components';

const ProductDetailsPage = () => {
  const { id } = useParams();
  return <ProductDetails id={id} />;
};

class ProductDetailsBase extends React.Component {
  state = { data: {} };

  componentWillMount() {
    const { id } = this.props;
    this.setState({ id });

    this.props.firebase
      .getProduct(id)
      .then(doc =>
        doc.exists
          ? this.setState({ data: doc.data() })
          : console.log('No DOc')
      )
      .then(async () => {
        const { href } = this.state.data;

        this.setState({
          data: { href: await this.props.firebase.getImage(href) }
        });
      });
    // GEts iamge URL
  }
  componentDidMount() {
    const prevState = this.state.data;

    const { href } = this.state.data;
    this.setState({
      data: { ...prevState, href: this.props.firebase.getImage(href) }
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
            <h3>{name}</h3>
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
            <h4>{price}</h4>
            <h1>BUY BUTTON</h1>
          </Grid.Column>
        </Grid>
      </Wrapper>
    );
  }
}

const Wrapper = Styled.div`
    margin-top: 150px;


`;

const ProductDetails = withFirebase(ProductDetailsBase);

export default ProductDetailsPage;
