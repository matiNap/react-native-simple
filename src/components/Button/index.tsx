import React, { ReactNode } from 'react';
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
import { SimpleBackgroundColor, SimpleShadow, Palette } from '../../types';
import { getThemeColor, getShadow } from '../../helpers';

type VariantType = 'outlined' | 'filled' | 'empty';
interface Props {
    style?: StyleProp<ViewStyle>;
    labelStyle: StyleProp<TextStyle>;
    title?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    buttonColor?: SimpleBackgroundColor;
    variant?: VariantType;
    shadow?: SimpleShadow;
    onPress?: () => void;
    enabled?: boolean;
}

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
    style,
    title,
    startIcon,
    endIcon,
    labelStyle,
    variant = 'filled',
    enabled = true,
    onPress,
    ...props
}: Props) => {
    const { currentPalette } = useTheme();
    const shadow = getShadow(props.shadow);
    const buttonColor = getThemeColor(
        props.buttonColor,
        currentPalette,
        currentPalette.accent,
    );
    const { currentStyle, textStyle } = getCurrentStyle(
        variant,
        enabled,
        buttonColor,
        currentPalette,
    );
    return (
        <View style={[currentStyle, styles.container, shadow, style]}>
            <RectButton style={styles.rectButton} {...{ onPress, enabled }}>
                {startIcon}
                {title && (
                    <Text style={StyleSheet.flatten([labelStyle, textStyle])}>
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
    },
    rectButton: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
