import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { ReactNode } from 'react';
import { SimpleBackgroundColor, SimpleShadow } from '.';

export type VariantType = 'outlined' | 'filled' | 'empty';

export interface LocalButtonProps {
    buttonColor?: SimpleBackgroundColor;
    variant?: VariantType;
    shadow?: SimpleShadow;
    style?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
}
export default interface ButtonProps extends LocalButtonProps {
    title?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onPress?: () => void;
    enabled?: boolean;
}
