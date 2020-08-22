import React from 'react';
import Animated, {
    useCode,
    cond,
    eq,
    set,
    add,
    call,
    divide,
    abs,
    clockRunning,
    max,
    and,
    greaterOrEq,
    lessOrEq,
    min,
    diff,
} from 'react-native-reanimated';
import Props from '../../types/ImageGallery';
import { Image, View, StyleSheet } from 'react-native';
import metrics from '../../theme/metrics';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
    usePanGestureHandler,
    snapPoint,
    useValue,
    timing,
    useClock,
} from 'react-native-redash';

export default ({
    images,
    imageHeight,
    containerStyle,
    children,
    onChange,
}: Props) => {
    const clock = useClock();
    const offsetX = useValue(0);
    const translateX = useValue(0);
    const width = metrics.window.width;
    const snapPoints = images.map((_, index) => index * -width);
    const imagesContainerWidth = metrics.window.width * images.length;
    const {
        gestureHandler,
        state,
        translation,
        velocity,
    } = usePanGestureHandler();
    const to = snapPoint(
        translateX,
        cond(
            and(greaterOrEq(velocity.x, -2000), lessOrEq(velocity.x, 2000)),
            velocity.x,
            min(-1, max(1, velocity.x)),
        ),
        snapPoints,
    );
    useCode(
        () => [
            // debug('Test', diff(clockRunning(clock))),
            cond(eq(state, State.ACTIVE), [
                set(translateX, add(offsetX, translation.x)),
            ]),
            cond(eq(state, State.END), [
                set(
                    translateX,
                    timing({
                        from: translateX,
                        to,
                        clock,
                    }),
                ),
                cond(
                    eq(diff(clockRunning(clock)), -1),
                    call(
                        [
                            abs(divide(translateX, metrics.window.width)),
                            to,
                            translateX,
                        ],
                        ([current]) => {
                            onChange(current + 1);
                        },
                    ),
                ),
                set(offsetX, translateX),
            ]),
        ],
        [],
    );
    return (
        <View style={containerStyle}>
            <PanGestureHandler {...gestureHandler}>
                <Animated.View
                    style={StyleSheet.flatten([
                        styles.imagesContainer,
                        {
                            transform: [{ translateX }],
                            width: imagesContainerWidth,
                        },
                    ])}
                >
                    {images.map((image) => (
                        <View style={styles.imageContainer} key={image.key}>
                            <Image
                                source={{ uri: image.uri }}
                                style={StyleSheet.flatten([
                                    styles.image,
                                    { height: imageHeight },
                                ])}
                            />
                            <View
                                style={[
                                    styles.absoluteContainer,
                                    { height: imageHeight },
                                ]}
                            >
                                {image.children}
                            </View>
                        </View>
                    ))}
                </Animated.View>
            </PanGestureHandler>
            <View
                style={[styles.absoluteContainer, { height: imageHeight }]}
                pointerEvents="box-none"
            >
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: metrics.window.width,
        height: '100%',
    },
    imagesContainer: {
        flexDirection: 'row',
    },
    imageContainer: {
        width: metrics.window.width,
        height: '100%',
    },
    absoluteContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: metrics.window.width,
    },
});
