import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon,
} from 'semantic-ui-react';

import * as routes from '../Common/routes';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from '@react-firebase/auth';
import { firebaseConfig } from '../Firebase/firebase';

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <LoginForm />
  </div>
);

const LoginForm = () => (
  <Grid
    textAlign="center"
    style={{ height: '100vh' }}
    verticalAlign="middle"
  >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        <Image src="/logo.png" /> Log-in to your account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>

      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <Message>
          <Icon
            name="google"
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
            }}
          />
        </Message>
      </FirebaseAuthProvider>
      <Message>
        New to us? <a href={routes.SIGN_UP}>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default SignInPage;
