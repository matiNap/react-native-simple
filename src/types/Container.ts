import { StyleProp, ViewStyle } from 'react-native';
import { SimpleBackgroundColor } from './index';

export default interface ContainerProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    backgroundColor?: SimpleBackgroundColor;
}
