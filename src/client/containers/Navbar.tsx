import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Grid, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
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

const pages = [
  { item: 'Home', id: 'home' },
  { item: 'About', id: 'features' },
  { item: 'Creators', id: 'creators' },
];

const links = [
  {
    item: 'github',
    url: 'https://github.com/oslabs-beta/Armada',
    icon: 'fa-brands fa-github fa-lg',
  },
  {
    item: 'linkedin',
    url: 'https://www.linkedin.com/company/armadak8s/',
    icon: 'fa-brands fa-linkedin fa-lg',
  },
  { item: 'medium', url: 'https://medium.com/@nat.w.heller/armada-k8s-a-sleek-and-powerful-kubernetes-monitoring-solution-bb448ede7d04', icon: 'fa-brands fa-medium' },
];

export default function HideAppBar(props: Props) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    // setAnchorElNav(event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(`#${id}`);

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // handleCloseNavMenu();
    setTimeout(handleCloseNavMenu, 800);
  };

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
          <Container maxWidth='xl' id='home2'>
            <Toolbar variant='dense' disableGutters>
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  justifyContent: 'flex-start',
                }}
              >
                <Button
                  // size='small'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                  sx={{
                    textAlign: 'start',
                    mx: 0,
                    px: 0,
                    justifyContent: 'flex-start',
                    display: 'flex',
                  }}
                >
                  <i className='fa-solid fa-bars fa-fw'></i>
                </Button>

                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.id}
                      onClick={(e) => {
                        handleClick(e, page.id);
                      }}
                      // onClick={handleCloseNavMenu}
                    >
                      <Typography
                        variant='subtitle2'
                        sx={{ cursor: 'pointer' }}
                      >
                        {page.item}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  textDecoration: 'none',
                }}
              >
                <img
                  src={require('../assets/logo_white.png')}
                  style={{ width: '100px' }}
                />
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'flex-start',
                  maxWidth: '250px',
                  mr: 3,
                }}
              >
                {pages.map((page) => (
                  <Typography
                    key={page.id}
                    onClick={(e) => {
                      handleClick(e, page.id);
                    }}
                    sx={{ m: 0, color: 'white', px: 1, cursor: 'pointer' }}
                  >
                    {page.item}
                  </Typography>
                ))}
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  maxWidth: '100px',
                  justifyContent: 'flex-end',
                }}
              >
                {links.map((link) => (
                  <Box
                    component='a'
                    key={link.item}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <i
                      className={link.icon}
                      style={{ textDecoration: 'none', color: 'white' }}
                    ></i>
                  </Box>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {props.children}
    </React.Fragment>
  );
}
