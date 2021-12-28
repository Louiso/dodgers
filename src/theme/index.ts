import { createTheme } from '@mui/material';
import './declare.modules';
import colors from './colors';

const theme = createTheme({
  palette: {
    primary: {
      ...colors.primaryColor,
      main: colors.primaryColor[500],
      light: colors.primaryColor[300],
      dark: colors.primaryColor[700],
    },
    secondary: {
      ...colors.secondaryColor,
      main: colors.secondaryColor[500],
      light: colors.secondaryColor[300],
      dark: colors.secondaryColor[700],
    },
    tertiary: {
      ...colors.tertiaryColor,
      main: colors.tertiaryColor[500],
      light: colors.tertiaryColor[300],
      dark: colors.tertiaryColor[700],
    },
  },
});

theme.palette.augmentColor({
  name: 'tertiary',
  color: theme.palette.tertiary,
});

export type Theme = typeof theme;

export default theme;
