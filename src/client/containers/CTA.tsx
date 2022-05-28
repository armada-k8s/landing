import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import FeatureWrapper from '../components/FeatureWrapper';
import CTAGlance from '../components/CTAGlance';
import CTAMetrics from '../components/CTAMetrics';
import CTAQuery from '../components/CTAQuery';
import CTALogs from '../components/CTALogs';
function CTA() {
  return (
    <FeatureWrapper title='About'>
      <React.Fragment>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          rowSpacing={20}
        >
          <CTAMetrics />
          <CTAGlance />
          <CTAQuery />
          <CTALogs />
        </Grid>
      </React.Fragment>
    </FeatureWrapper>
  );
}

export default CTA;
