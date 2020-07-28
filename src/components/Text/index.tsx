import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import useTheme from '../ThemeProvider/useTheme';
import { getThemeNumber, getThemeColor } from '../../helpers';
import { SimpleFontSize, SimpleTextColor } from '../../types';

interface Props {
    children: string;
    fontSize?: SimpleFontSize;
    color?: SimpleTextColor;
    style?: StyleProp<TextStyle>;
}

export default ({ children, style, ...props }: Props) => {
    const {
        typography: { fontSize },
        currentPalette,
    } = useTheme();
    const currentFontSize = getThemeNumber(
        props.fontSize,
        fontSize,
        fontSize.normal,
    );
    const textColor = getThemeColor(
        props.color,
        currentPalette.text,
        currentPalette.text.primary,
    );

    return (
        <Text style={[{ fontSize: currentFontSize, color: textColor }, style]}>
            {children}
        </Text>
    );
};
