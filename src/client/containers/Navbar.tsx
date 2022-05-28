import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { grey } from '@mui/material/colors';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          sx={{
            background: grey['800'],
            color: '#f5f5f7',
          }}
        >
          <Toolbar variant='dense'>
            <Grid container>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <img
                  src={require('../assets/logo_light_grey_textOnly.png')}
                  style={{ width: '120px' }}
                />
              </Grid>
            </Grid>
            {/* <Typography variant='h6' component='div'>
              Scroll to hide App bar
            </Typography> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {props.children}
    </React.Fragment>
  );
}
