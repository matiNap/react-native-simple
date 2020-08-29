import React, { useMemo } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Props from '../../types/SortableList';
import Animated from 'react-native-reanimated';
import DraggableElement from './DraggableElement';

export default ({ children, itemHeight, onReorder, disabled }: Props) => {
    const { offsets, listHeight } = useMemo(() => {
        const offsets = children.map(
            (_, index) => new Animated.Value(index * itemHeight),
        );
        const listHeight = offsets.length * itemHeight;

        return { offsets, listHeight };
    }, [children, itemHeight]);
    return (
        <ScrollView
            contentContainerStyle={{ height: listHeight, width: '100%' }}
        >
            {children.map((child, index) => {
                return (
                    <DraggableElement
                        key={`srtbl${index}`}
                        {...{
                            offsets,
                            height: itemHeight,
                            onReorder,
                            disabled,
                        }}
                        myIndex={index}
                        y={offsets[index]}
                        controller={child}
                    />
                );
            })}
        </ScrollView>
    );
};
