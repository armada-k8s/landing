import React from 'react';
import { render } from 'react-dom';
import Navbar from './containers/Navbar';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ParallaxProvider } from 'react-scroll-parallax';

import Main from './containers/Main';
import Features from './containers/Features';
import GetStarted from './containers/GetStarted';
import Creators from './containers/Creators';
import { theme } from './styles/themeOptions';
import Footer from './containers/Footer';
import './styles/styles.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <ParallaxProvider>
          <Main />
          <Features />
          <GetStarted />
          <Creators />
          <Footer />
        </ParallaxProvider>
      </Navbar>
    </ThemeProvider>
  );
}

render(<App />, document.querySelector('#root'));
