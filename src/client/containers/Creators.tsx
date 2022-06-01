import React from 'react';
import { Grid, Typography } from '@mui/material';
import FeatureWrapper from '../components/FeatureWrapper';
import Creator from '../components/Creator';

const creators = [
  {
    name: 'Tori Wu',
    color: '#9ccc65',
    img: 'k8s_dog.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    name: 'Em Podhorcer',
    color: '#ff8a80',
    img: 'k8s_dog.png',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    name: 'Nat Heller',
    color: '#00bcd4',
    img: 'nat.jpg',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    name: 'Jessica Lee',

    color: '#b388ff',
    title: 'Full-stack engineer',
    img: 'jessica.jpg',
    blurb:
      'Jessica is a full-stack software engineer who loves learning new materials. Jessica is passionate about writing clean, modular, and performant code with peer engineers as well as the end-user in mind. During her free time, she likes to hike, play golf, and read books.',
  },
];

function Creators() {
  return (
    <FeatureWrapper title='Creators'>
      <React.Fragment>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
          rowSpacing={20}
          id='creators'
        >
          {creators.map((el) => (
            <Grid
              item
              key={el.name}
              sm={6}
              md={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Creator {...el} />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    </FeatureWrapper>
  );
}

export default Creators;
