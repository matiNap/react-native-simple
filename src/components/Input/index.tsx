import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import InputProps from '../../types/Input';
import useTheme from '../ThemeProvider/useTheme';
import { getProperty, getShadow, getThemeColor } from '../../helpers';

const DEFAULT_BORDER_WIDTH = 2;

export default ({
    endIcon,
    startIcon,
    containerStyle,
    ...props
}: InputProps) => {
    const theme = useTheme();
    const { currentPalette, typography, Input } = theme;
    const shadow = getProperty([Input?.shadow, getShadow(props.shadow)]);
    const backgroundColor = getProperty([
        currentPalette.secondary,
        Input?.backgroundColor,
        getThemeColor(props.backgroundColor, currentPalette),
    ]);
    const color = getProperty([
        currentPalette.text.primary,
        Input?.color,
        getThemeColor(props.color, currentPalette.text),
    ]);
    const borderColor = getProperty([
        'transparent',
        Input?.borderColor,
        getThemeColor(props.borderColor, currentPalette),
    ]);
    const { fontSize, primaryFont } = typography;
    const withBorderStyle = borderColor
        ? { borderWidth: DEFAULT_BORDER_WIDTH }
        : { borderWidth: 0 };
    return (
        <View
            style={StyleSheet.flatten([
                styles.container,
                shadow,
                withBorderStyle,
                { backgroundColor, borderColor },
                containerStyle,
            ])}
        >
            <View style={styles.subContainer}>
                {startIcon}
                <TextInput
                    {...props}
                    style={StyleSheet.flatten([
                        styles.inputStyle,
                        {
                            color,
                            fontFamily: primaryFont,
                            fontSize: fontSize.normal,
                        },
                        getProperty([Input?.style]),
                    ])}
                />
            </View>
            {endIcon}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    subContainer: {
        flexDirection: 'row',
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
    },
    inputStyle: {
        flex: 1,
    },
});
