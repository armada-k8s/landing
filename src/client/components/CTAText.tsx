import React from 'react';
import { Grid, Typography } from '@mui/material';

interface Props {
  title: string;
  children: string;
}

function CTAText(props: Props) {
  return (
    <Grid
      item
      sm={6}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <Typography sx={{ typography: { xs: 'h4', sm: 'h4', md: 'h3' }, mb: 3 }}>
        {props.title}
      </Typography>
      <Typography variant='body2' sx={{ color: 'text.secondary' }}>
        {props.children}
      </Typography>
    </Grid>
  );
}

export default CTAText;
