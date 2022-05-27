import { Theme, ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#8C5C8E',
    },
    secondary: {
      main: '#b0d0d3',
    },
  },
};

export const theme = createTheme(themeOptions);
