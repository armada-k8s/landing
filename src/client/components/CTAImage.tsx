import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { spacing } from '@mui/system';
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
      sm={8}
      xs={12}
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
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '100%', sm: '100%', md: '100%' },
          display: 'flex',
          alignItems: { sm: 'center' },
          m: {xs: 0, sm: 10, md: 10},
        }}
      >
        {props.children}
      </Box>
    </Grid>
  );
}

export default CTAImage;
