import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

interface Props {
  icon: string;
  headline: string;
  children: string;
}

function GetStartedStep(props: Props) {
  return (
    <Grid item sm={4}>
      <Box
        component='div'
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mx: 'auto',
        }}
      >
        <i className={props.icon}></i>
      </Box>
      <Box component='div' p={3}>
        <Typography sx={{ textAlign: 'start' }}>{props.headline}</Typography>
        <Typography sx={{ p: 2 }} variant='body2' color='text.secondary'>
          {props.children}
        </Typography>
      </Box>
    </Grid>
  );
}

export default GetStartedStep;
