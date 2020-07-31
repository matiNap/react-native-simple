import { SimpleFontSize, SimpleTextColor } from '.';
import { TextStyle, StyleProp } from 'react-native';

export default interface Props {
    children: string;
    fontSize?: SimpleFontSize;
    color?: SimpleTextColor;
    style?: StyleProp<TextStyle>;
}
