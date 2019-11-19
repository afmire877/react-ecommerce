import React, { Component } from 'react';
import { List, Image, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addToCart } from '../../actionCreator/cartActions';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import store from '../../store';
import reducers from '../../reducers';
import placeholder from '../../images/place.png';
import SubTotal from './SubTotal';
import CartItem from './cartItem';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Container>
        <div
          css={css`
            grid-column: 2/9;
          `}
        >
          <h1>Shopping Cart</h1>
          <List divided verticalAlign="middle">
            {cart
              ? this.props.cart.map(item => <CartItem data={item} />)
              : 'No Items in basket'}
          </List>
        </div>
        <div
          css={css`
            grid-column: 9/12;
          `}
        >
          <SubTotal />
        </div>
      </Container>
    );
  }
}
const Container = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
