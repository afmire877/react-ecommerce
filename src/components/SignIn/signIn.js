import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon
} from 'semantic-ui-react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import * as routes from '../Common/routes';
import Firebase, { withFirebase } from '../Firebase';

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInFormBase extends React.Component {
  state = { ...INITIAL_STATE };

  handleSubmit = event => {
    const { email, password } = this.state;
    console.log(this.props);
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(routes.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';
    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo.png" /> Log-in to your account
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                name="password"
                value={password}
                onChange={this.handleChange}
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button type="submit" color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>

          <Message>
            <Icon name="google" />
            <Icon name="facebook" />
          </Message>

          <Message>
            New to us? <a href={routes.SIGN_UP}>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
