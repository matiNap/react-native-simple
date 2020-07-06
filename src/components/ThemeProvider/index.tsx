import React, { ReactNode } from 'react';
import ThemeType from './ThemeType';
import defaultTheme from '../../theme/defaultTheme';

export const ThemeContext = React.createContext<ThemeType>(defaultTheme);

interface Props {
    theme: ThemeType;
    children: ReactNode;
}

export default ({ theme, children }: Props) => {
    return (
        <ThemeContext.Provider value={{ ...defaultTheme, ...theme }}>
            {children}
        </ThemeContext.Provider>
    );
};
