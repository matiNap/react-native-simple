import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SortableListProps as Props } from '../../types/SortableList';
import Animated from 'react-native-reanimated';
import DraggableElement from './DraggableElement';

export default ({ children, itemHeight, onReorder }: Props) => {
    const offsets = children.map(
        (_, index) => new Animated.Value(index * itemHeight),
    );
    const listHeight = offsets.length * itemHeight;
    return (
        <ScrollView
            contentContainerStyle={{ height: listHeight, width: '100%' }}
        >
            {children.map((child, index) => {
                return (
                    <DraggableElement
                        key={`srtbl${index}`}
                        {...{ offsets, height: itemHeight, onReorder }}
                        myIndex={index}
                        y={offsets[index]}
                    >
                        {child}
                    </DraggableElement>
                );
            })}
        </ScrollView>
    );
};
