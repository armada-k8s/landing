import { Theme, ThemeOptions, createTheme } from '@mui/material/styles';


// declare module '@mui/material/styles' {
//   interface BreakpointOverrides {
//     xs: true;
//     sm: true;
//     md: true;
//     lg: true;
//     xl: true;
//   }
// }
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#8C5C8E',
    },
    secondary: {
      main: '#b0d0d3',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const theme = createTheme(themeOptions);
