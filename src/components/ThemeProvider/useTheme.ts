import { useContext } from 'react';
import { ThemeContext } from './index';
import { ThemeType } from '../../types';

export default <T>(): T & ThemeType => {
    const theme = useContext<ThemeType & T>(ThemeContext);

    return theme;
};
