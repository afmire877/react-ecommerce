import React, { useState } from 'react';
import { List, Image, Icon, Dropdown } from 'semantic-ui-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import { removeCartItem } from '../../actionCreator/cartActions';

import placeholder from '../../images/place.png';

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

const CartItem = ({ data }) => {
  const [item, setItem] = useState(data);
  const handleTrash = e => {
    console.log();
    removeCartItem(item);
    return 'YAH';
  };
  return (
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
            onClick={handleTrash}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  removeCartItem: item => dispatch(removeCartItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
