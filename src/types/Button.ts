import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { ReactNode } from 'react';
import { SimpleBackgroundColor, SimpleShadow } from '.';

export type VariantType = 'outlined' | 'filled' | 'empty';
export default interface ButtonProps {
    style?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    title?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    buttonColor?: SimpleBackgroundColor;
    variant?: VariantType;
    shadow?: SimpleShadow;
    onPress?: () => void;
    enabled?: boolean;
}
