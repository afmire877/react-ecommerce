import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Button } from 'semantic-ui-react';
import Firebase, { withFirebase } from '../Firebase';

const SignOutButton = props => {
  return (
    <Button type="button" onClick={props.firebase.doSignOut}>
      Sign out
    </Button>
  );
};
export default compose(withFirebase)(SignOutButton);
