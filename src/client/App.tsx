import React from 'react';
import { render } from 'react-dom';
import Navbar from './containers/Navbar';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Main from './containers/Main';
import Features from './containers/Features';
import Creators from './containers/Creators';
import { theme } from './styles/themeOptions';
import './styles/styles.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <React.Fragment>
          <Main />
          <Features />
          <Creators />
        </React.Fragment>
      </Navbar>
    </ThemeProvider>
  );
}

render(<App />, document.querySelector('#root'));
