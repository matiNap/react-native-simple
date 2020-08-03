import React from 'react';
import Animated, { Easing, interpolate } from 'react-native-reanimated';
import { ListItemProps as Props } from '../../types/ListItem';
import { useTimingTransition } from 'react-native-redash';
import { StyleSheet } from 'react-native';

export default ({ children, style }: Props) => {
    const itemTransition = useTimingTransition(1, {
        duration: 300,
        easing: Easing.in(Easing.exp),
    });
    const scale = interpolate(itemTransition, {
        inputRange: [0, 1],
        outputRange: [0.2, 1],
    });
    return (
        <Animated.View
            style={StyleSheet.flatten([
                { opacity: itemTransition, transform: [{ scale }] },
                style,
            ])}
        >
            {children}
        </Animated.View>
    );
};
