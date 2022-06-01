import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import CTAText from './CTAText';
import CTAImage from './CTAImage';
function CTAQuery() {
  return (
    <>
      <CTAImage position='top'>
        <img src={require('../assets/custom.gif')} />
      </CTAImage>
      <CTAText title='Powerful and Flexible Monitoring Solution'>
        Armada brings deeper cluster insights to your fingertips. Use our simple
        PromQL search bar to build customizable data visualizations that can be
        filtered by step and time span. Every cluster is different, so we offer
        access to over 800 Prometheus queries to meet your monitoring needs.
      </CTAText>
      <CTAImage right={true} position='right'>
        <img src={require('../assets/custom.gif')} />
      </CTAImage>
    </>
  );
}

export default CTAQuery;
