import React from 'react';
import { Text, StyleSheet } from 'react-native';
import useTheme from '../ThemeProvider/useTheme';
import { getThemeNumber, getThemeColor, getProperty } from '../../helpers';
import Props from '../../types/Text';

export default ({ children, ...props }: Props) => {
    const theme = useTheme();
    const { currentPalette, Text: textStyle, typography } = theme;
    const style = getProperty([textStyle?.style, props.style]);
    const color = getProperty([
        currentPalette.text.primary,
        textStyle?.color,
        getThemeColor(props.color, currentPalette.text),
    ]);
    const fontSize = getProperty([
        textStyle?.fontSize,
        getThemeNumber(props.fontSize, typography.fontSize),
    ]);

    return (
        <Text
            style={StyleSheet.flatten([
                {
                    fontFamily: typography.primaryFont,
                    fontSize,
                    color,
                },
                style,
            ])}
        >
            {children}
        </Text>
    );
};
