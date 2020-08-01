import React from 'react';
import { StyleSheet, View } from 'react-native';

import { getThemeColor, getProperty } from '../../helpers';
import useTheme from '../ThemeProvider/useTheme';
import Props from '../../types/Container';

export default ({ children, style, backgroundColor }: Props) => {
    const theme = useTheme();
    const { Container } = theme;

    return (
        <View
            style={[
                getProperty([Container?.style]),
                styles.container,
                {
                    backgroundColor: getProperty([
                        theme.currentPalette.secondary,
                        Container?.backgroundColor,
                        getThemeColor(backgroundColor, theme.currentPalette),
                    ]),
                },
                style,
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
});
