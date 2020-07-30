import { useContext } from 'react';
import { ThemeContext } from './index';
import { ThemeType } from '../../types';

export default (): ThemeType => {
    const theme = useContext(ThemeContext);

    return theme;
};
