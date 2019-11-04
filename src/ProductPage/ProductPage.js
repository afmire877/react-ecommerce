import styles from './Productpage.module.css';
import React, { Fragment } from 'react';
import { Card, Container } from 'semantic-ui-react';
import * as firebase from 'firebase/app';
import Firebase, { withFirebase } from '../components/Firebase';
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
    // console.log(this.props.firebase);
    this.props.firebase
      .getProducts()
      .then(q =>
        q.forEach(doc => {
          dataArr.push([doc.id, doc.data()]);
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
        <Container>
          <h1>All Products</h1>
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
        <ProductCard
          name={product[1].name}
          price={product[1].price}
          href={`/products/${product[0]}`}
        />
      );
    })}
  </Card.Group>
);

export default withFirebase(ProductPage);
