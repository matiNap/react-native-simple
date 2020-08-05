import React, { ReactNode } from 'react';
import { SimpleTheme } from '../../types';
import defaultTheme from '../../theme/defaultTheme';
import _ from 'lodash';

export const ThemeContext = React.createContext<any>(defaultTheme);

interface Props {
    theme: SimpleTheme;
    children: ReactNode;
    darkMode: undefined | boolean;
}

const createCurrentTheme = (
    theme: SimpleTheme,
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
