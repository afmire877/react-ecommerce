import styles from './Productpage.module.css';
import React, { Fragment } from 'react';
import { Card, Container } from 'semantic-ui-react';
import * as firebase from 'firebase/app';
import ProductCard from '../components/ProductCard/productCard';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

// const src = '/images/wireframe/white-image.png'

const db = firebase.firestore();

// images folder api https://react-ecommerce-4dbd1.appspot.com/

class ProductPage extends React.Component {
  state = {
    data: [],
    isloading: true,
  };

  getData() {
    let dataArr = [];
    db.collection('products')
      .get()
      .then(q =>
        q.forEach(doc => {
          dataArr.push(doc.data());
        }),
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
        <Container>
          <h1>All Porducts</h1>
          <div className={styles.wrapper}>
            <LoadingSpinner
              className={styles.wrapper}
              active={this.state.isloading}
            >
              <Cards products={this.state.data} />
            </LoadingSpinner>
          </div>
        </Container>
      </Fragment>
    );
  }
}

/**
 *
 * @param {array} props array of products
 */

const Cards = ({ products }) => (
  <Card.Group itemsPerRow={3}>
    {products.map(product => {
      return (
        <ProductCard name={product.name} price={product.price} />
      );
    })}
  </Card.Group>
);

export default ProductPage;
