import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
// const search = require('../assets/search.png');

function Main() {
  return (
    <Container sx={{ marginTop: 25, marginBottom: 30 }}>
      <Typography variant='h1'>It's time for a new way of success</Typography>

      <img src={require('../assets/mockup2.png')} />
    </Container>
  );
}

export default Main;
