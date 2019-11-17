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

const quantityOptions = [
  {
    key: 1,
    text: 1,
    value: 1
  },
  {
    key: 2,
    text: 2,
    value: 2
  },
  {
    key: 3,
    text: 3,
    value: 3
  },
  {
    key: 4,
    text: 4,
    value: 4
  },
  {
    key: 5,
    text: 5,
    value: 5
  },
  {
    key: 6,
    text: 6,
    value: 6
  },
  {
    key: 6,
    text: 6,
    value: 6
  },
  {
    key: 7,
    text: 7,
    value: 7
  },
  {
    key: 8,
    text: 8,
    value: 8
  },
  {
    key: 9,
    text: 9,
    value: 9
  }
];
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

const CartItem = ({ data }) => (
  <div
    css={css`
      padding: 10px;
      border-bottom: 1px solid grey;
      display: flex;
    `}
  >
    <div css={css``}>
      <img src={placeholder}></img>
    </div>
    <div
      css={css`
        width: 100%;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
      `}
    >
      <div>
        <h5>{data.name}</h5>
        <span
          css={css`
            color: green;
          `}
        >
          In Stock
        </span>
      </div>
      <div
        css={css`
          display: flex;
        `}
      ></div>
      <div>
        <Dropdown
          css={css`
            height: 10px;
            margin-bottom: 20px;
          `}
          value={data.quantity}
          fluid
          selection
          active
          options={quantityOptions}
        />
        <p>
          <Icon name="pound" />
          {data.price}
        </p>
        <Icon
          color="red"
          name="trash"
          css={css`
            padding: 10px;
            margin-top: 10px;
          `}
        />
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
