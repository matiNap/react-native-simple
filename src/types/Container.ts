import { StyleProp, ViewStyle } from 'react-native';
import { SimpleBackgroundColor } from './index';

export interface LocalContainerProps {
    style?: StyleProp<ViewStyle>;
    backgroundColor?: SimpleBackgroundColor;
}

export default interface ContainerProps extends LocalContainerProps {
    children?: React.ReactNode;
}
