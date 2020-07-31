import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getThemeColor, getProperty } from '../../helpers';
import useTheme from '../ThemeProvider/useTheme';
import Props from '../../types/Column';

export default function ({ children, ...props }: Props) {
    const { Column, currentPalette } = useTheme();
    const backgroundColor = getProperty([
        Column?.backgroundColor,
        getThemeColor(props.backgroundColor, currentPalette),
    ]);
    const align = getProperty([Column?.align, props.align]);
    const justifyContent = getProperty([
        Column?.justifyContent,
        props.justifyContent,
    ]);
    const height = getProperty([Column?.height, props.height]);
    const style = getProperty([Column?.style, props.style]);
    return (
        <View
            style={[
                styles.container,
                {
                    justifyContent,
                    height,
                    backgroundColor,
                    alignSelf: align,
                },
                style,
            ]}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
});
