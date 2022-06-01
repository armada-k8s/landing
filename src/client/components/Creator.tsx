import React from 'react';
import { Avatar, Grid, Typography, Box, Stack, Divider } from '@mui/material';

interface Props {
  color: string;
  name: string;
  github?: string;
  linkedin?: string;
  title?: string;
  blurb?: string;
  img?: string;
}

function Creator(props: Props) {
  return (
    <>
      <img
        alt={props.name}
        style={{
          backgroundColor: props.color,
          objectFit: 'cover',
          width: '150px',
          height: '150px',
          borderRadius: '10px / 30px',
        }}
        src={require(`../assets/${props.img}`)}
      />
      <Typography
        component='div'
        variant='body2'
        sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'flex-start',
          justifyContent: 'center',
          mt: 1,
        }}
      >
        {props.name} | {props.title}
      </Typography>
      <Typography
        component='div'
        variant='body2'
        color='text.secondary'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          px: 3,
          mt: 1,
          mb: 2,
        }}
      >
        {props.blurb}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 3 }}>
        <a
          href={props.github}
          style={{
            textDecoration: 'none',
            color: 'grey',
            maxWidth: '25px',
            padding: 0,
          }}
        >
          <span
            className='fa-brands fa-linkedin fa-fw fa-lg'
            style={{ display: 'flex', margin: 0, padding: 0 }}
          ></span>
        </a>
        <a
          href={props.linkedin}
          style={{
            textDecoration: 'none',
            color: 'grey',
            display: 'flex',
            maxWidth: '25px',
            padding: 0,
          }}
        >
          <span
            className='fa-brands fa-github fa-fw fa-lg'
            style={{ display: 'flex', margin: 0, padding: 0 }}
          ></span>
        </a>
      </Box>
    </>
  );
}

export default Creator;
