import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
  children: React.ReactElement;
  title: string;
  bgColor?: string;
  id?: string;
}

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: '50%',
  backgroundColor: theme.palette.primary.main,
  position: 'absolute',
  bottom: -2,
  left: 'calc(25%)',
  transition: theme.transitions.create('opacity'),
}));
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
        <Box mb={15} component='div' id={props.id}>
          <Typography
            component='span'
            variant='h5'
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} )`,
            }}
            color='text.secondary'
          >
            {props.title}
            <ImageMarked />
          </Typography>
        </Box>
        <Box component='div'>{props.children}</Box>
      </Container>
    </Box>
  );
}

export default FeatureWrapper;
