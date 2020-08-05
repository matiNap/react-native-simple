import React from 'react';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
    View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import useTheme from '../ThemeProvider/useTheme';
import Text from '../Text';
import { Palette } from '../../types';
import { getThemeColor, getShadow, getProperty } from '../../helpers';
import Props, { VariantType } from '../../types/Button';

const getCurrentStyle = (
    variant: VariantType,
    enabled: boolean,
    buttonColor: string,
    currentPalette: Palette,
): {
    textStyle: StyleProp<TextStyle>;
    currentStyle: StyleProp<ViewStyle>;
} => {
    const { disabled, text } = currentPalette;
    const textColor = enabled ? text.primary : disabled.primary;
    const backgroundColor = enabled ? buttonColor : disabled.secondary;
    const textStyle = { color: textColor };
    if (variant === 'outlined') {
        return {
            currentStyle: {
                borderWidth: 2,
                borderColor: backgroundColor,
            },
            textStyle,
        };
    } else if (variant === 'filled') {
        return {
            currentStyle: { backgroundColor },
            textStyle,
        };
    } else {
        return {
            currentStyle: {
                backgroundColor: 'transparent',
            },
            textStyle,
        };
    }
};

export default ({
    title,
    startIcon,
    endIcon,
    enabled = true,
    onPress,
    ...props
}: Props) => {
    const theme = useTheme();
    const { currentPalette, Button, palette } = theme;
    const labelStyle = getProperty([
        {
            color:
                props.variant === 'filled'
                    ? palette.text.secondary
                    : currentPalette.text.primary,
        },
        Button?.labelStyle,
        props.labelStyle,
    ]);
    const style = getProperty([Button?.style, props.style]);
    const shadow = getProperty([Button?.shadow, getShadow(props.shadow)]);
    const buttonColor = getProperty([
        currentPalette.accent,
        Button?.buttonColor,
        getThemeColor(props.buttonColor, currentPalette),
    ]);
    const variant = getProperty([Button?.variant, props.variant]);
    const { currentStyle, textStyle } = getCurrentStyle(
        variant,
        enabled,
        buttonColor,
        currentPalette,
    );
    return (
        <View
            style={StyleSheet.flatten([
                currentStyle,
                styles.container,
                shadow,
                style,
            ])}
        >
            <RectButton style={[styles.rectButton]} {...{ onPress, enabled }}>
                {startIcon}
                {title && (
                    <Text style={StyleSheet.flatten([textStyle, labelStyle])}>
                        {title}
                    </Text>
                )}
                {endIcon}
            </RectButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    rectButton: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
