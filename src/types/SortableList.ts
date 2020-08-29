import { StyleProp, ViewStyle } from 'react-native';
import { GestureHandlerType } from './DraggableController';

export type SortableItem = React.ComponentType<{
    gestureHandler: GestureHandlerType;
}>;

export default interface Props {
    children: SortableItem[];
    style?: StyleProp<ViewStyle>;
    itemHeight: number;
    onReorder?: (draggedIndex: number, swtichedWithIndex: number) => void;
    disabled?: boolean;
}
