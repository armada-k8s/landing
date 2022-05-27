import React from 'react';
import { Grid, Typography } from '@mui/material';
// const search = require('../assets/search.png');

function Main() {
  return (
    <Grid container spacing={2} mt={5}>
      <Grid item xs={7}>
        <Typography variant='h1'>It's time for a new way of success</Typography>
      </Grid>
      <Grid item xs={5}>
        <img src={require('../assets/search.png')} />
      </Grid>
    </Grid>
  );
}

export default Main;
