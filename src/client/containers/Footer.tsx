import React from 'react';
import { Typography, Link, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

function Footer(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='/'>
        Armada K8s
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Footer;
