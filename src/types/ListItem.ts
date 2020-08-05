import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

export type ListItemProps = Props;
