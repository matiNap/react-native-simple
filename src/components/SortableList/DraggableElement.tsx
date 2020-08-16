import React, { useMemo } from 'react';
import Animated, {
    cond,
    eq,
    multiply,
    floor,
    divide,
    useCode,
    set,
    block,
    and,
    call,
    add,
} from 'react-native-reanimated';
import Props from '../../types/DraggableElement';
import { onGestureEvent, withSpringTransition } from 'react-native-redash';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';

const withSnap = ({
    value,
    offset,
    state,
}: {
    value: Animated.Value<number>;
    offset: Animated.Value<number>;
    state: Animated.Value<number>;
}) => {
    const safeOffset = new Animated.Value(0);
    return block([
        cond(
            eq(state, State.ACTIVE),
            add(safeOffset, value),
            set(safeOffset, offset),
        ),
    ]);
};

export default ({
    y: currentOffset,
    children,
    height,
    myIndex,
    onReorder,
    offsets,
    ...props
}: Props) => {
    const {
        state,
        gestureHandler,
        zIndex,
        offsetY,
        translateY,
    } = useMemo(() => {
        const state = new Animated.Value(State.UNDETERMINED);
        const zIndex = cond(eq(state, State.ACTIVE), 10, 1);
        const translationY = new Animated.Value(0);

        const gestureHandler = onGestureEvent({
            state,
            translationY,
        });

        const y = withSnap({
            value: translationY,
            offset: currentOffset,
            state,
        });

        const offsetY = multiply(floor(divide(y, height)), height);
        const translateY = withSpringTransition(y, {});

        return {
            state,
            translationY,
            gestureHandler,
            zIndex,
            offsetY,
            translateY,
        };
    }, [currentOffset, height]);

    useCode(
        () =>
            block([
                offsets.map((offset, index) => [
                    cond(and(eq(offset, offsetY), eq(state, State.ACTIVE)), [
                        call([], () => {
                            if (index !== myIndex && onReorder)
                                onReorder(myIndex, index);
                        }),
                        set(offset, currentOffset),
                        set(currentOffset, offsetY),
                    ]),
                ]),
            ]),
        [currentOffset, offsetY, offsets, state],
    );

    return (
        <View pointerEvents={props.disabled ? 'none' : 'auto'}>
            <PanGestureHandler {...gestureHandler}>
                <Animated.View
                    style={{
                        ...styles.container,
                        zIndex,
                        height,
                        transform: [{ translateY: translateY }],
                    }}
                >
                    {children}
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        width: '100%',
        zIndex: 100,
    },
});
