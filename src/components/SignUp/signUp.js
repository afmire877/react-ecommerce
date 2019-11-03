import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Header, Grid } from 'semantic-ui-react';
import * as routes from '../Common/routes';
import { compose } from 'recompose';

import Firebase, { withFirebase } from '../Firebase';

export default () => {
  return <SignUpForm />;
};

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' }
];

const INTIAL_STATE = {
  firstName: '',
  lastName: '',
  gender: '',
  phoneNumber: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  termsCheck: false,
  error: null
};

class SignUpFormBase extends React.Component {
  state = { ...INTIAL_STATE };

  handleChange = (e, { name, value }) => {
    console.log(this.state);
    name === 'gender' || name === 'termsCheck'
      ? this.setState({ [name]: value })
      : this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const {
      firstName,
      lastName,
      gender,
      phoneNumber,
      email,
      passwordOne,
      termsCheck
    } = this.state;
    console.log(this.props);

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INTIAL_STATE });
        this.props.history.push(routes.HOME);

        // add the data of user in database
        this.props.firebase.doAddUserUserData({
          firstName,
          lastName,
          gender,
          mobile: phoneNumber,
          email
        });
      })
      .catch(error => {
        this.setState({ error });
      });
    e.preventDefault();
  };

  render() {
    const {
      firstName,
      lastName,
      gender,
      phoneNumber,
      email,
      passwordOne,
      passwordTwo,
      termsCheck,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      firstName === '' ||
      lastName === '' ||
      gender === '' ||
      phoneNumber === '' ||
      termsCheck === false;
    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 750 }}>
          <Header as="h2" color="teal">
            Sign Up Today to enjoy exclusive offers
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Form.Group widths="equal">
              <Form.Input
                fluid
                onChange={this.handleChange}
                name="firstName"
                value={firstName}
                label="First name"
                placeholder="First name"
              />
              <Form.Input
                fluid
                onChange={this.handleChange}
                name="lastName"
                value={lastName}
                label="Last name"
                placeholder="Last name"
              />
              <Form.Select
                fluid
                name="gender"
                value={gender}
                onChange={this.handleChange}
                label="Gender"
                options={options}
                placeholder="Gender"
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                name="phoneNumber"
                onChange={this.handleChange}
                value={phoneNumber}
                label="Phone Number"
                placeholder="Phone Number"
              />
              <Form.Input
                fluid
                type="email"
                name="email"
                onChange={this.handleChange}
                value={email}
                label="Email Address"
                placeholder="Email address"
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                type="password"
                name="passwordOne"
                onChange={this.handleChange}
                value={passwordOne}
                label="Password"
                placeholder="Password"
              />
              <Form.Input
                type="password"
                name="passwordTwo"
                onChange={this.handleChange}
                value={passwordTwo}
                label="Password"
                placeholder="Confirm Password"
              />
            </Form.Group>

            <Form.Checkbox
              name="termsCheck"
              onChange={e =>
                this.setState({
                  termsCheck: !e.target.parentNode.classList.contains(
                    'checked'
                  )
                })
              }
              label="I agree to the Terms and Conditions"
            />
            <Form.Button type="submit" disabled={isInvalid}>
              Submit
            </Form.Button>
            {error && <p>{error.message}</p>}
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export { SignUpForm };