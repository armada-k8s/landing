import React from 'react';
import { Grid, Typography } from '@mui/material';
import CTAText from './CTAText';
import CTAImage from './CTAImage';

function CTALogs() {
  return (
    <>
      <CTAImage>
        <img
          src={require('../assets/stack.png')}
          style={{ maxWidth: '350px' }}
        />
      </CTAImage>
      <CTAText title='Centralized Place for Alerts and Event Logs'>
        Never miss a thing in your cluster again. On our alerts page you can see
        all your rules in one place, filterable by group, name, status, and
        severity. Expand to see descriptions and all firing alerts. Check out
        the logs page to stay on top of all events in your cluster.
      </CTAText>
    </>
  );
}

export default CTALogs;
