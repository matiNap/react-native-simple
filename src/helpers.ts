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

const isRgba = (value: string) => {
    const head = value.slice(0, 4);

    if (head === 'rgba') return true;
    return false;
};

export const getThemeColor = (
    value: SimpleBackgroundColor | SimpleTextColor,
    data: { [key: string]: any },
): string | null => {
    if (value) {
        if (value[0] === '#' || isRgba(value)) return value;
        else return data[value];
    } else return null;
};

export const getThemeNumber = (
    value: SimpleFontSize,
    data: { [key: string]: any },
): number | null => {
    if (value) {
        if (typeof value === 'number') return value;
        else return data[value];
    } else return null;
};

//Get property that is not null or undefined and take core of order ([important -> very important])
export const getProperty = (properties: any[]) => {
    const rProperites = properties.reverse();
    let found: any | null = null;
    for (let i = 0; i < rProperites.length; i++) {
        if (rProperites[i] !== null && rProperites[i] !== undefined) {
            found = rProperites[i];
            break;
        }
    }

    return found;
};
