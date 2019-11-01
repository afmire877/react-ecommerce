import React, {Fragment}from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image, Icon} from 'semantic-ui-react'

import * as routes from '../Common/routes';



class Nav extends React.Component {


    render () {
        return (
            <Fragment>
                <div>
                    <Link to={routes.HOME} >Home</Link>
                    <Link to={routes.LANDING} >Landing </Link>

                    <div>
                        <Link to={routes.SIGN_IN} >Sign in </Link>
                        <Link to={routes.SIGN_UP} >Sign up</Link>
                        <Link to={routes.ADMIN} >Admin</Link>
                    </div>
                </div>
                <Menu fixed='top' inverted>
                    <Container>
                    <Menu.Item as='a' header>
                        <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                        React Ecommerce
                    </Menu.Item>
                    <Menu.Item as='a' link={true} href={routes.HOME}>Home</Menu.Item>
                    <Menu.Item as='a' link={true} href={routes.PRODUCT_PAGE}>Products</Menu.Item>


                    <Menu.Menu position="right">
                        <Menu.Item as='a' link={true} href={routes.SIGN_UP}><Icon  name='add user'/> Sign Up</Menu.Item>
                        <Menu.Item as='a' link={true} href={routes.SIGN_IN}><Icon  name='user'/> Sign In</Menu.Item>
                    </Menu.Menu>

                    </Container>
                </Menu>
              </Fragment>
        )
    }
}

export default Nav;