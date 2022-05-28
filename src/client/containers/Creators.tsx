import React from 'react';
import { Grid, Typography } from '@mui/material';
import FeatureWrapper from '../components/FeatureWrapper';

function Creators() {
  return (
    <FeatureWrapper title='Creators' bgColor='white'>
      <React.Fragment>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          rowSpacing={20}
        ></Grid>
      </React.Fragment>
    </FeatureWrapper>
  );
}

export default Creators;
