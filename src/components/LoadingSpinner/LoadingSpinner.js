import React from 'react';
import { Dimmer, Loader, Transition } from 'semantic-ui-react';

const LoadingSpinner = ({ active, children }) => (
  <div>
    <Transition visible={active} animation="fade" duration={500}>
      <Dimmer active={active}>
        <Loader>Loading</Loader>
      </Dimmer>
    </Transition>
    {children}
  </div>
);

export default LoadingSpinner;
