import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import FeatureWrapper from '../components/FeatureWrapper';
import CTAGlance from '../components/CTAGlance';
import CTAMetrics from '../components/CTAMetrics';
import CTAQuery from '../components/CTAQuery';
import CTALogs from '../components/CTALogs';
function CTA() {
  return (
    <FeatureWrapper title='About' id='features'>
      <React.Fragment>
        <Grid
          container
          justifyContent='space-between'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          rowSpacing={20}
        >
          <CTAGlance />
          <CTAMetrics />
          <CTAQuery />
          <CTALogs />
        </Grid>
      </React.Fragment>
    </FeatureWrapper>
  );
}

export default CTA;
