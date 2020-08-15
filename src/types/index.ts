import { LocalRowProps } from './Row';
import { LocalTextProps } from './Text';
import { LocalHeaderProps } from './Header';
import { LocalColumnProps } from './Column';
import { LocalButtonProps } from './Button';
import { InputProps, LocalInputProps } from './Input';
import { LocalContainerProps } from './Container';

export type SimpleBackgroundColor =
    | string
    | 'primary'
    | 'secondary'
    | 'accent'
    | undefined;
export type SimpleTextColor = 'primary' | 'secondary' | string | undefined;
export type SimpleFontSize =
    | 'small'
    | 'normal'
    | 'medium'
    | 'big'
    | string
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
    Container?: RecursivePartial<LocalContainerProps>;
    Row?: RecursivePartial<LocalRowProps>;
    Column?: RecursivePartial<LocalColumnProps>;
    Text?: RecursivePartial<LocalTextProps>;
    Header?: RecursivePartial<LocalHeaderProps>;
    Button?: RecursivePartial<LocalButtonProps>;
    Input?: RecursivePartial<LocalInputProps>;
}

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };
export type RecursivePartialAddition<T> = {
    [P in keyof T]?: RecursivePartial<T[P]> & { [key: string]: any };
};

export type SimpleTheme = RecursivePartialAddition<ThemeType> & {
    [key: string]: any;
};
