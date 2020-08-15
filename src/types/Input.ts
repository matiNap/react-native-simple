import { TextInputProperties, StyleProp, ViewStyle } from 'react-native';
import { SimpleShadow, SimpleBackgroundColor, SimpleTextColor } from '.';
import { ReactNode } from 'react';

export type InputVariant = 'filled' | 'outlined' | 'empty';
export interface LocalInputProps {
    containerStyle?: StyleProp<ViewStyle>;
    shadow?: SimpleShadow;
    backgroundColor?: SimpleBackgroundColor;
    color?: SimpleTextColor;
    borderColor?: SimpleBackgroundColor;
}
export default interface Props extends LocalInputProps, TextInputProperties {
    endIcon?: ReactNode;
    startIcon?: ReactNode;
}
