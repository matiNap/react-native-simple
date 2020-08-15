import { ViewStyle, StyleProp } from 'react-native';

export default interface Props {
    images: string[];
    imageHeight: number;
    containerStyle?: StyleProp<ViewStyle>;
}
