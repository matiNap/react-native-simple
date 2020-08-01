import RowProps from './Row';
import SimpleTextProps from './Text';
import HeaderProps from './Header';
import ColumnProps from './Column';
import ButtonProps from './Button';
import { InputProps } from './Input';

export type SimpleBackgroundColor =
    | string
    | 'primary'
    | 'secondary'
    | 'accent'
    | undefined;
export type SimpleTextColor = string | 'primary' | 'secondary' | undefined;
export type SimpleFontSize =
    | string
    | 'small'
    | 'normal'
    | 'medium'
    | 'big'
    | number
    | undefined;
interface Shadow {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
}

export type SimpleShadow = 'default' | Shadow | null | undefined;

export interface Palette {
    primary: string;
    secondary: string;
    accent: string;
    text: {
        primary: string;
        secondary: string;
    };
    disabled: {
        primary: string;
        secondary: string;
    };
}

export interface Typography {
    primaryFont: string | undefined;
    fontSize: {
        small: number;
        normal: number;
        medium: number;
        big: number;
    };
}

export interface ThemeType {
    currentPalette: Palette;
    palette: Palette;
    paletteDark: Palette;
    typography: Typography;
    Container?: RecursivePartial<RowProps>;
    Row?: RecursivePartial<RowProps>;
    Column?: RecursivePartial<ColumnProps>;
    Text?: RecursivePartial<SimpleTextProps>;
    Header?: RecursivePartial<HeaderProps>;
    Button?: RecursivePartial<ButtonProps>;
    Input?: RecursivePartial<InputProps>;
}

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type SimpleTheme = RecursivePartial<ThemeType> & { [key: string]: any };
