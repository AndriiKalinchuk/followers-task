import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#EBD8FF',
      darker: 'rgba(92, 211, 168, 1)',
      accent: '#424c9e',
    },
    neutral: {
      main: '#1e1138',
      contrastText: '#fff',
      light: 'rgba(235, 216, 255, 1)',
    },
    secondary: {
      main: '#424c9e',
      accent: 'rgba(87, 54, 163, 0.2)',
      darker: 'rgba(92, 211, 167, 0.4)',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});
