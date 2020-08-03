import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
    children: ReactNode[];
    style?: StyleProp<ViewStyle>;
    itemHeight: number;
    onReorder: (draggedIndex: number, swtichedWithIndex: number) => void;
}

export type SortableListProps = Props;
