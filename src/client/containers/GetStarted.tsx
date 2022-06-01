import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import FeatureWrapper from '../components/FeatureWrapper';
import GetStartedStep from '../components/GetStartedStep';

function GetStarted() {
  return (
    <FeatureWrapper title='Get started' id='get-started' bgColor='white'>
      <React.Fragment>
        <Grid container justifyContent='space-between' spacing={2}>
          <GetStartedStep
            icon='fa-solid fa-box-open fa-4x'
            headline='1. Clone our Github repo'
          >
            lorem ipisum
          </GetStartedStep>
          <GetStartedStep
            icon='fa-solid fa-terminal fa-4x'
            headline='2. Port forward Prometheus'
          >
            lorem ipisum
          </GetStartedStep>
          <GetStartedStep
            icon='fa-solid fa-window-maximize fa-4x'
            headline='3. Run Armada'
          >
            lorem ipisum
          </GetStartedStep>
        </Grid>
      </React.Fragment>
    </FeatureWrapper>
  );
}

export default GetStarted;
