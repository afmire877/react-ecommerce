import React from 'react';
import { connect } from 'react-redux';
import { Icon, Card, Button } from 'semantic-ui-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

class Subtotal extends React.Component {
  render() {
    const { cart } = this.props;
    let total = cart
      .map(item => item.price * item.quantity)
      .reduce((acc, cur) => acc + cur)
      .toFixed(2);

    return (
      <Card
        css={css`
          width: 100%;
          box-shadow: 1px;
        `}
      >
        <Card.Content>
          Subtotal
          <div
            css={css`
              margin: 20px 0;

              font-size: 1.5rem;
            `}
          >
            <Icon name="pound" />
            {total}
          </div>
          <Button
            css={css`
              width: 100%;
            `}
          >
            <Button.Content>
              <Icon name="cart"></Icon>
              Checkout
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps)(Subtotal);
