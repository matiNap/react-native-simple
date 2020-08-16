import React from 'react';
import Animated, { useCode, cond, eq, set, add } from 'react-native-reanimated';
import Props from '../../types/ImageGallery';
import { Image, View, StyleSheet } from 'react-native';
import metrics from '../../theme/metrics';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
    usePanGestureHandler,
    snapPoint,
    useValue,
    timing,
} from 'react-native-redash';

export default ({ images, imageHeight, containerStyle }: Props) => {
    const offsetX = useValue(0);
    const translateX = useValue(0);
    const width = metrics.window.width;
    const snapPoints = images.map((_, index) => index * -width);
    const imageContainerWidth = metrics.window.width * images.length;
    const {
        gestureHandler,
        state,
        translation,
        velocity,
    } = usePanGestureHandler();
    const to = snapPoint(translateX, velocity.x, snapPoints);
    useCode(
        () => [
            cond(eq(state, State.ACTIVE), [
                set(translateX, add(offsetX, translation.x)),
            ]),
            cond(eq(state, State.END), [
                set(
                    translateX,
                    timing({
                        from: translateX,
                        to,
                    }),
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
                        styles.imageContainer,
                        {
                            transform: [{ translateX }],
                            width: imageContainerWidth,
                        },
                    ])}
                >
                    {images.map((image) => (
                        <Image
                            source={{ uri: image }}
                            style={StyleSheet.flatten([
                                styles.image,
                                { height: imageHeight },
                            ])}
                        />
                    ))}
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: metrics.window.width,
        height: '100%',
    },
    imageContainer: {
        flexDirection: 'row',
    },
});
