import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image, Icon } from 'semantic-ui-react';
import SignOutButton from '../SignOut/signOut';

import * as routes from '../Common/routes';
import { auth } from 'firebase';

const AuthMenu = ({ authUser }) => {
  return (
    <Fragment>
      {authUser ? (
        <Menu.Menu position="right">
          <SignOutButton />
        </Menu.Menu>
      ) : (
        <Menu.Menu position="right">
          <Menu.Item as="a" link={true} href={routes.SIGN_UP}>
            <Icon name="add user" /> Sign Up
          </Menu.Item>
          <Menu.Item as="a" link={true} href={routes.SIGN_IN}>
            <Icon name="user" /> Sign In
          </Menu.Item>
        </Menu.Menu>
      )}
    </Fragment>
  );
};

class Nav extends React.Component {
  render() {
    const { authUser } = this.props;
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" link={true} href={routes.LANDING} header>
            <Image
              size="mini"
              src="/logo.png"
              style={{ marginRight: '1.5em' }}
            />
            React Ecommerce
          </Menu.Item>
          <Menu.Item as="a" link={true} href={routes.HOME}>
            Home
          </Menu.Item>
          <Menu.Item as="a" link={true} href={routes.PRODUCT_PAGE}>
            Products
          </Menu.Item>
        </Container>
        <AuthMenu authUser={authUser} />
      </Menu>
    );
  }
}

export default Nav;
