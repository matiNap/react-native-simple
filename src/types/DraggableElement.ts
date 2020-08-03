import { ReactNode } from 'react';
import Animated from 'react-native-reanimated';

interface Props {
    children: ReactNode;
    y: Animated.Value<number>;
    onReorder: (draggedIndex: number, swtichedWithIndex: number) => void;
    height: number;
    myIndex: number;
    offsets: Animated.Value<number>[];
}

export type DraggableElementProps = Props;
