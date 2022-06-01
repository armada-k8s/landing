import React from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Grid, Typography } from '@mui/material';
// const search = require('../assets/search.png');

function Main() {
  const image = useParallax<HTMLDivElement>({
    scale: [0.3, 1, [0.14, 1.1, 0.31, 1.01]],
  });
  const headline = useParallax<HTMLDivElement>({
    opacity: [1, 0.8],
  });

  return (
    <div id='home'>
      <div style={{ marginTop: '5rem' }}>
        <div ref={headline.ref}>
          <Typography
            variant='h2'
            sx={{
              fontWeight: 700,
              maxWidth: '590px',
              margin: 'auto',
              textAlign: 'center',
            }}
          >
            Introducing Armada
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
            sx={{
              maxWidth: '420px',
              margin: 'auto',
              textAlign: 'center',
              mt: 2,
            }}
          >
            A sleek, streamlined, and powerful visualization dashboard for your
            Kubernetes cluster{' '}
          </Typography>

          <Typography
            variant='subtitle2'
            sx={{
              maxWidth: '120px',
              margin: 'auto',
              textAlign: 'center',
              mt: 1,
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontFamily: 'Lato',
            }}
          >
            <a
              href='https://github.com/oslabs-beta/Armada'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                textDecoration: 'none',
                color: '#0066cc',
                fontFamily: 'Lato, sans-serif',
              }}
            >
              Learn more
            </a>
          </Typography>
        </div>
        <div ref={image.ref}>
          <img src={require('../assets/home.png')} />
        </div>
      </div>
    </div>
  );
}

export default Main;
