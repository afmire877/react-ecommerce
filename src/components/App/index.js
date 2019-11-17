import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import Nav from '../Navigation/nav';

import SignInPage from '../SignIn/signIn';
import SignUpPage from '../SignUp/signUp';
import SignOutButton from '../SignOut/signOut';
import AccountPage from '../Account/AccountPage';
import AdminPage from '../Admin/AdminPage';
import ProductDetailsPage from '../ProductDetailsPage';

import * as routes from '../Common/routes';
import ProductPage from '../../ProductPage/ProductPage';
import { withFirebase } from '../Firebase';
import Styled from 'styled-components';
import Home from '../Home';
import Cart from '../Cart/cart';
const Wrapper = Styled.div`
    margin-top: 60px;


`;

class App extends React.Component {
  state = {
    authUser: null
  };

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      }
    );
  }

  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
      <Router>
        <Nav authUser={this.state.authUser} />
        <Wrapper>
          <Route path={routes.SIGN_IN} component={SignInPage} />
          <Route path={routes.SIGN_UP} component={SignUpPage} />
          <Route exact path={routes.HOME} component={Home} />

          <PrivateRoute
            path={routes.ADMIN}
            authUser={this.state.authUser}
          >
            <AdminPage />
          </PrivateRoute>
          <Route path={routes.ACCOUNT} component={AccountPage} />
          <Route path={routes.CART} component={Cart} />

          <Route
            exact
            path={routes.PRODUCT_PAGE}
            component={ProductPage}
          />
          <Route
            path={'/products/:id'}
            component={ProductDetailsPage}
          />
        </Wrapper>
      </Router>
    );
  }
}

function PrivateRoute({ children, authUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.SIGN_IN,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default withFirebase(App);
