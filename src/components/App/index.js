import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom'
import Nav from '../Navigation/nav';

import SignInPage from '../SignIn/signIn';
import SignUpPage from '../SignUp/signUp';
import SignOut from '../SignOut/signOut';
import AccountPage from '../Account/AccountPage'
import AdminPage from '../Admin/AdminPage'

import * as routes from '../Common/routes'
import ProductPage from '../../ProductPage/ProductPage';


class App extends React.Component { 



    render() {
        return (
            <Router>
                <Nav />


                <Route path={routes.SIGN_IN} component={SignInPage} />
                <Route path={routes.SIGN_UP} component={SignUpPage} />
                <Route path={routes.ADMIN} component={AdminPage} />
                <Route path={routes.ACCOUNT} component={AccountPage} />
                <Route path={routes.PRODUCT_PAGE} component={ProductPage} />


            </Router>
        )
    }
}


export default App;