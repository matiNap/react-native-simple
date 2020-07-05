interface Palette {
  primary: string;
  secondary: string;
  accent: string;
  text: {
    primary: string;
    secondary: string;
  };
}

interface Typography {
  primaryFont: string | undefined;
  fontSize: {
    header: number;
    small: number;
    normal: number;
    medium: number;
    big: number;
  };
}

export default interface ThemeType {
  palette: Palette;
  paletteDark: Palette;
  typography: Typography;
}
