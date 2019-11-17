import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToCart from '../../actionCreator/addToCart';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import store from '../../store';
// import { dispatch } from 'react-redux';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div css={css``}>
        {cart
          ? this.props.cart.map(item => <p>{item.name}</p>)
          : 'No Items in basket'}
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
