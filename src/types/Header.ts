import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import { SimpleShadow, SimpleBackgroundColor } from '.';

export default interface HeaderPorps {
    height?: number;
    backgroundColor?: SimpleBackgroundColor;
    shadow?: SimpleShadow;
    translucent?: boolean | undefined;
    children?: ReactNode | ReactNode[];
    borderRadius?: number;
    style?: StyleProp<ViewStyle>;
    fixed?: boolean | undefined;
}
