// @ts-check
import styles from './Productpage.module.css';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Container } from 'semantic-ui-react';

import { withFirebase } from '../components/Firebase';
import ProductCard from '../components/ProductCard/productCard';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

// const src = '/images/wireframe/white-image.png'

// images folder api https://react-ecommerce-4dbd1.appspot.com/

class ProductPage extends React.Component {
  state = {
    data: [],
    isloading: true
  };

  getData() {
    let dataArr = [];
    this.props.firebase
      .getProducts()
      .then(q =>
        q.forEach(doc => {
          let data = doc.data();
          let { id } = doc;
          console.log(data);
          dataArr.push({ ...data, id: parseInt(id) });
          console.log(dataArr);
        })
      )
      .then(() => {
        this.setState({ data: dataArr, isloading: false });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Fragment>
        <LoadingSpinner active={this.state.isloading}>
          <Container>
            <h1>All Products</h1>
            <div className={styles.wrapper}>
              <Cards products={this.state.data} />
            </div>
          </Container>
        </LoadingSpinner>
      </Fragment>
    );
  }
}

/**
 *
 * @param {array} products array of products
 */

const Cards = ({ products }) => (
  <Card.Group itemsPerRow={3}>
    {console.log(products)}
    {products.map(product => {
      return (
        <ProductCard
          name={product.name}
          price={product.price}
          href={`/products/${product.id}`}
          summary={product.summary}
        />
      );
    })}
  </Card.Group>
);

const mapStateToProps = state => ({
  ...state
});
export default connect(mapStateToProps)(withFirebase(ProductPage));
