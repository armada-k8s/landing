import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import CTAText from './CTAText';
import CTAImage from './CTAImage';

function CTAGlance() {
  return (
    <>
      <CTAImage position='top'>
        <img src={require('../assets/dashboard.gif')} />
      </CTAImage>
      
      <CTAText title='Cluster Health at a Glance'>
        No more hunting around in your terminal - our homepage provides a quick
        and comprehensive overview of your cluster health and performance via a
        streamlined and intuitive user interface. We’ve ensured the most
        relevant metrics are displayed here — such as overall cluster resource
        usage, as well as the direct status and consumption intensity of your
        nodes and pods. Furthermore, our filter by namespace feature simplifies
        the process of tracking down resources pertaining to your virtual
        sub-clusters.
      </CTAText>
  
      <CTAImage right={true} position='right'>
        <img src={require('../assets/dashboard.gif')} />
      </CTAImage>
    </>
  );
}

export default CTAGlance;
