import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import CTAText from './CTAText';
import CTAImage from './CTAImage';

function CTAMetrics() {
  return (
    <>
      <CTAImage>
        <img src={require('../assets/metrics.gif')}/>
        
      </CTAImage>
      <CTAText title='Focus on the Metrics that Matter'>
        For more detailed visibility into the metrics within your cluster, we've
        expanded upon key trends on a separate time-series page, which features
        prominent data points related to CPU, Memory, and Network Usage at the
        Namespace, Pod, and Node level. This way, you can ensure that your
        cluster performance over time is trending as you would expect.
      </CTAText>
    </>
  );
}

export default CTAMetrics;
