import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import { TextInputProperties, StyleProp, ViewStyle } from 'react-native';
import {
    RecursivePartial,
    SimpleShadow,
    SimpleBackgroundColor,
    SimpleTextColor,
} from '.';
import { ReactNode } from 'react';

export type InputVariant = 'filled' | 'outlined' | 'empty';

interface Props {
    endIcon?: ReactNode;
    startIcon?: ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    shadow?: SimpleShadow;
    backgroundColor?: SimpleBackgroundColor;
    color?: SimpleTextColor;
    borderColor?: SimpleBackgroundColor;
}

export type InputProps = TextInputProperties & Props;

export default Props;
