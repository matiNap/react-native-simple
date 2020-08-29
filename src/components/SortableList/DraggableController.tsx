import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Props from '../../types/DraggableController';

export default ({ children, gestureHandler }: Props) => {
    return (
        <PanGestureHandler {...gestureHandler}>
            <Animated.View>{children}</Animated.View>
        </PanGestureHandler>
    );
};
