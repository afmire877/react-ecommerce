import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from '../Navigation/nav';

import SignInPage from '../SignIn/signIn';
import SignUpPage from '../SignUp/signUp';
import SignOutPage from '../SignOut/signOut';
import AccountPage from '../Account/AccountPage';
import AdminPage from '../Admin/AdminPage';

import * as routes from '../Common/routes';
import ProductPage from '../../ProductPage/ProductPage';
import { withFirebase } from '../Firebase';

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
        <Route path={routes.SIGN_IN} component={SignInPage} />
        <Route path={routes.SIGN_UP} component={SignUpPage} />
        <Route path={routes.SIGN_OUT} component={SignOutPage} />
        <Route path={routes.ADMIN} component={AdminPage} />
        <Route path={routes.ACCOUNT} component={AccountPage} />
        <Route path={routes.PRODUCT_PAGE} component={ProductPage} />
      </Router>
    );
  }
}

export default withFirebase(App);
