import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import { SimpleShadow, SimpleBackgroundColor } from '.';

export interface LocalHeaderProps {
    height?: number;
    backgroundColor?: SimpleBackgroundColor;
    shadow?: SimpleShadow;
    translucent?: boolean | undefined;
    borderRadius?: number;
    style?: StyleProp<ViewStyle>;
    fixed?: boolean | undefined;
}
export default interface HeaderPorps extends LocalHeaderProps {
    children?: ReactNode | ReactNode[];
}
