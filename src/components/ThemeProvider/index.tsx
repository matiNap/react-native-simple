import React, { ReactNode } from 'react';
import ThemeType from './ThemeType';
import defaultTheme from '../../theme/defaultTheme';
import _ from 'lodash';

export const ThemeContext = React.createContext<ThemeType>(defaultTheme);

interface Props {
    theme: ThemeType;
    children: ReactNode;
    darkMode: undefined | boolean;
}

const createCurrentTheme = (
    theme: ThemeType,
    darkMode: boolean | undefined,
) => {
    const currentPaletteKey = darkMode ? 'paletteDark' : 'palette';
    const currentPalette = theme[currentPaletteKey]
        ? theme[currentPaletteKey]
        : defaultTheme[currentPaletteKey];

    return _.merge(defaultTheme, { ...theme, currentPalette });
};

export default ({ theme, children, darkMode }: Props) => {
    const currentTheme = createCurrentTheme(theme, darkMode);

    return (
        <ThemeContext.Provider value={currentTheme}>
            {children}
        </ThemeContext.Provider>
    );
};
