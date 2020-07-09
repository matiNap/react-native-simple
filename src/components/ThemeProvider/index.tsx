import React, { ReactNode } from 'react';
import ThemeType from './ThemeType';
import defaultTheme from '../../theme/defaultTheme';

export const ThemeContext = React.createContext<ThemeType>(defaultTheme);

interface Props {
    theme: ThemeType;
    children: ReactNode;
    darkMode: undefined | boolean;
}

const consctructTheme = (theme: ThemeType, key: 'palette' | 'paletteDark') => {
    return {
        ...defaultTheme,
        currentPalette: {
            ...defaultTheme[key],
            ...theme[key],
        },
    };
};

const createCurrentTheme = (
    theme: ThemeType,
    darkMode: boolean | undefined,
) => {
    if (theme && darkMode) {
        return consctructTheme(theme, 'paletteDark');
    } else if (theme && !darkMode) {
        return consctructTheme(theme, 'palette');
    } else if (!theme && darkMode) {
        return consctructTheme(defaultTheme, 'paletteDark');
    } else return consctructTheme(defaultTheme, 'palette');
};

export default ({ theme, children, darkMode }: Props) => {
    const currentTheme = createCurrentTheme(theme, darkMode);

    return (
        <ThemeContext.Provider value={currentTheme}>
            {children}
        </ThemeContext.Provider>
    );
};
