import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { bgcolor } from '@mui/system';

interface Props {
  children: React.ReactElement;
  title: string;
  bgColor?: string;
}
function FeatureWrapper(props: Props) {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: props.bgColor ? props.bgColor : '#f5f5f7',
        minHeight: '550px',
      }}
      mb={3}
    >
      <Container maxWidth='lg' sx={{ paddingTop: 5, paddingBottom: 10 }}>
        <Typography
          variant='h5'
          sx={{
            marginBottom: 10,
          }}
        >
          {props.title}
        </Typography>
        {props.children}
      </Container>
    </Box>
  );
}

export default FeatureWrapper;
