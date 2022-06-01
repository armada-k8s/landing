import React from 'react';
import { Grid, Typography } from '@mui/material';
import FeatureWrapper from '../components/FeatureWrapper';
import Creator from '../components/Creator';

const creators = [
  {
    name: 'Tori Wu',
    color: '#9ccc65',
    img: 'tori.jpg',
    title: 'Full-stack engineer',
    github: 'https://github.com/tortortor0',
    linkedin: 'https://www.linkedin.com/in/victoria-y-wu',
    blurb:
      'Tori is a full-stack software engineer who enjoys building tools that solve difficult problems and are delightful to use. She also loves digital drawing, rock climbing, and cooking.',
  },
  {
    name: 'Em Podhorcer',
    color: '#ff8a80',
    img: 'me.jpg',
    title: 'Full-stack engineer',
    github: 'https://github.com/epithe',
    linkedin: 'https://www.linkedin.com/in/emily-podhorcer/',
    blurb:
      'Em is a software engineer who likes solving puzzles, algorithmic or otherwise. Her favorite language is Python. When not coding, they can often be found reading, playing video games, or performing standup comedy.',
  },
  {
    name: 'Nat Heller',
    color: '#00bcd4',
    img: 'nat.jpg',
    title: 'Full-stack engineer',
    github: 'https://github.com/natwheller',
    linkedin: 'https://www.linkedin.com/in/natwheller/',
    blurb:
      'Nat (she/they) has been working in tech since 2019 across many areas of Product. Now she primarily focuses on web dev, where she creates software that is user-friendly, easy to maintain, and scalable. She loves cats, Italian and Asian home cooking, and climbing.',
  },
  {
    name: 'Jessica Lee',

    color: '#b388ff',
    title: 'Full-stack engineer',
    img: 'jessica.jpg',
    blurb:
      'Jessica is a full-stack software engineer who loves learning new materials. Jessica is passionate about writing clean, modular, and performant code with peer engineers as well as the end-user in mind. During her free time, she likes to hike, play golf, and read books.',
    github: 'https://github.com/frandis',
    linkedin: 'https://www.linkedin.com/in/jessica-lee-790a283b/',
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
