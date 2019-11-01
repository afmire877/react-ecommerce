import styles from './loading.module.css';
import React from 'react';
import {
  Dimmer,
  Loader,
  Image,
  Segment,
  Transition,
} from 'semantic-ui-react';

const LoadingSpinner = ({ active, children }) => (
  <div>
    <Segment className={styles.wrapper}>
      <Transition visible={active} animation="fade" duration={500}>
        <Dimmer active={active}>
          <Loader>Loading</Loader>
        </Dimmer>
      </Transition>
      {children}
    </Segment>
  </div>
);

export default LoadingSpinner;
