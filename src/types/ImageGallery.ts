import { ViewStyle, StyleProp } from 'react-native';
import { ReactNode } from 'react';

interface Image {
    children: ReactNode;
    uri: string;
    key: string;
}

export default interface Props {
    images: Image[];
    imageHeight: number;
    containerStyle?: StyleProp<ViewStyle>;
    children?: ReactNode;
    onChange: (current: number) => void;
}
