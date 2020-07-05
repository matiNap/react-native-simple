import React from 'react';
import useTheme from './useTheme';
import ThemeType from './ThemeType';

interface WithThemeProp {
  theme: ThemeType;
}

export default <P extends Record<string, unknown>>(
  Parent: React.ComponentType<P>,
) => {
  return (props: P & WithThemeProp) => {
    const theme = useTheme();
    return <Parent {...props} {...{ theme }} />;
  };
};
