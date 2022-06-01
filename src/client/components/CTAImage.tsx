import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { NONAME } from 'dns';

interface Props {
  children: React.ReactElement;
  right?: boolean;
  position?: string;
}
function CTAImage(props: Props) {
  return (
    <Grid
      item
      sm={6}
      sx={{
        display: {
          xs: !props.position
            ? 'flex'
            : props.position === 'top'
            ? 'flex'
            : 'none',
          sm: props.position === 'top' ? 'none' : 'flex',
        },
        justifyContent: {
          xs: 'center',
          sm: props.position === 'right' ? 'flex-end' : 'flex-start',
        },
        alignItems: 'flex-end',
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '60%', sm: '80%', md: '80%' },
          display: 'flex',
          alignItems: { sm: 'center' },
        }}
      >
        {props.children}
      </Box>
    </Grid>
  );
}

export default CTAImage;
