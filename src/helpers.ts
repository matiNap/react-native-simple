import { Dimensions, PixelRatio } from 'react-native';
import ThemeType from './components/ThemeProvider/ThemeType';
import { SimpleTextColor, SimpleBackgroundColor } from './types';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');

export function normalize(size: number): number {
    const newSize = size * (SCREEN_HEIGHT / SCREEN_WIDTH);
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const pickBackroundPaletteColor = (
    currentTheme: ThemeType,
    color: SimpleBackgroundColor,
): string => {
    if (
        color &&
        (color === 'accent' || color === 'primary' || color === 'secondary')
    ) {
        return currentTheme.currentPalette[color];
    }

    if (color) return color;
    else return 'transparent';
};

export const pickTextPaletteColor = (
    currentTheme: ThemeType,
    color: SimpleTextColor,
): string => {
    if (color && (color === 'primary' || color === 'secondary')) {
        return currentTheme.currentPalette[color];
    }

    if (color) return color;
    else return 'transparent';
};
