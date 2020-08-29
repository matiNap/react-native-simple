import Animated from 'react-native-reanimated';
import { GestureHandlerType } from './DraggableController';

export default interface Props {
    controller: React.ComponentType<{ gestureHandler: GestureHandlerType }>;
    y: Animated.Value<number>;
    onReorder?: (draggedIndex: number, swtichedWithIndex: number) => void;
    height: number;
    myIndex: number;
    offsets: Animated.Value<number>[];
    disabled?: boolean;
}
