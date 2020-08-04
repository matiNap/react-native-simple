import React from 'react';
import useTheme from './useTheme';
import { SimpleTheme } from '../../types';

interface WithThemeProp {
    theme: SimpleTheme;
}

export default <P extends Record<string, unknown>>(
    Parent: React.ComponentType<P>,
) => {
    return (props: P & WithThemeProp) => {
        const theme = useTheme();
        return <Parent {...props} {...{ theme }} />;
    };
};
