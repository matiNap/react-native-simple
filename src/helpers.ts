import {
    SimpleBackgroundColor,
    SimpleTextColor,
    SimpleFontSize,
    SimpleShadow,
} from './types';
import { DEFAULT_SHADOW } from './theme/defaultTheme';

export const getShadow = (shadow: SimpleShadow) => {
    if (shadow === null) return {};
    else if (shadow && shadow === 'default') {
        return DEFAULT_SHADOW;
    } else return shadow;
};

export const getThemeColor = (
    value: SimpleBackgroundColor | SimpleTextColor,
    data: { [key: string]: any },
    defaultValue: string,
): string => {
    if (value) {
        if (value[0] === '#') return value;
        else return data[value];
    } else return defaultValue;
};

export const getThemeNumber = (
    value: SimpleFontSize,
    data: { [key: string]: any },
    defaultValue: number,
): number => {
    if (value) {
        if (typeof value === 'number') return value;
        else return data[value];
    } else return defaultValue;
};
