import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

class Subtotal extends Component {
  render() {
    const { cart } = this.props;
    let total = cart
      .map(item => item.price * item.quantity)
      .reduce((acc, cur) => acc + cur)
      .toFixed(2);

    return (
      <div
        css={css`
          width: 100%;
        `}
      >
        Subtotal: <Icon name="pound" />
        {total}
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps)(Subtotal);
