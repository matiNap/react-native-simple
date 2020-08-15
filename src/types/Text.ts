import { SimpleFontSize, SimpleTextColor } from '.';
import { TextStyle, StyleProp, TextProperties } from 'react-native';

export interface LocalTextProps {
    fontSize?: SimpleFontSize;
    color?: SimpleTextColor;
    style?: StyleProp<TextStyle>;
}
export default interface Props extends TextProperties, LocalTextProps {
    children: string;
}
