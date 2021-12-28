// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Mui from '@mui/material';

declare module '@mui/material/styles' {
  // interface Theme {

  // }

  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }

  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
    A400?: string;
    A700?: string;
  }

  interface SimplePaletteColorOptions {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
    A400?: string;
    A700?: string;
  }

  // interface ThemeOptions {

  // }

}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
