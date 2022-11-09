import {createTheme, ThemeProvider, Palette} from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      type: string;
      primary: {
        main: string;
        light: string;
        dark: string;
        50: string;
        A100: string;
      };
      secondary: {
        main: string;
      };
      error: {
        main: string;
      };
      success: {
        main: string;
      };
      neutral: {
        main: string;
      };
      prontoBlue: CustomColors;
      prontoBlack: ProntoBlack;
    };

    shape: {
      borderRadius: number;
    };
    overrides: {
      MuiInputBase: {
        root: {
          textAlign: string;
        };
      };
    };
  }

  interface CustomColors {
    main: string;
    dark: string;
    light: string;
    contrastText?: string;
    50: string;
  }
  interface CustomColorsOptions {
    main: string;
    dark: string;
    light: string;
    contrastText?: string;
    50: string;
  }
  interface ProntoBlack {
    main: string;
    contrastText?: string;
    80: string;
    60: string;
    50: string;
    30: string;
    20: string;
    10: string;
  }
  interface ProntoBlackOptions extends ProntoBlack {
    main: string;
    contrastText?: string;
    80: string;
    60: string;
    50: string;
    30: string;
    20: string;
    10: string;
  }
  interface Pallete {
    neutral: Palette['primary'];
    prontoBlue: CustomColors;
    prontoBlack: ProntoBlack;
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    prontoBlue?: CustomColorsOptions;
    prontoBlack?: ProntoBlack;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    prontoBlue: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#34495E',
      dark: '#34495E ',
      light: '#34495E ', // this will be used as primaryMain75
    },
    secondary: {
      main: '#808B96',
      dark: '#2980B9',
      light: '#566573',
    },
    error: {
      main: '#E74C3C',
    },
    neutral: {
      main: '#949494',
      contrastText: '#fff',
    },
    success: {
      main: '#28B463',
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
  typography: {
    h3: {
      fontFamily: '"RalewayBold"',
    },
    h6: {
      fontFamily: '"RalewayBold"',
    },
    subtitle1: {
      fontFamily: 'RalewayItalic',
      color: '#515A5A',
    },
    body1: {
      fontFamily: '"RalewayMedium"',
    },
  },
});
interface Props {
  children: React.ReactNode;
}

const CustomTheme: React.FC<Props> = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default CustomTheme;
