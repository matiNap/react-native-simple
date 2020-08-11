import React from 'react';
import { StyleSheet, View } from 'react-native';
import metrics from '../../theme/metrics';
import useTheme from '../ThemeProvider/useTheme';
import { getThemeColor, getShadow, getProperty } from '../../helpers';
import Props from '../../types/Header';

const DEFAULT_HEIGHT = metrics.screen.height * 0.12;
const FIXED_STYLE = {
    position: 'absolute',
    top: 0,
    left: 0,
};
export default ({ children, ...props }: Props) => {
    const theme = useTheme();
    const { currentPalette, Header } = theme;
    const translucent = getProperty([Header?.translucent, props.translucent]);
    const fixed = getProperty([Header?.fixed, props.fixed]);
    const style = getProperty([Header?.style, props.style]);
    const backgroundColor = getProperty([
        currentPalette.primary,
        Header?.backgroundColor,
        getThemeColor(props.backgroundColor, currentPalette),
    ]);
    const radiusProperty = getProperty([
        Header?.borderRadius,
        props.borderRadius,
    ]);
    const borderRadius = radiusProperty ? radiusProperty : 0;
    const height = getProperty([DEFAULT_HEIGHT, Header?.height, props.height]);
    const paddingTop = translucent ? metrics.statusBarHeight + 10 : 0;
    const shadow = getProperty([Header?.shadow, getShadow(props.shadow)]);
    const fixedStyle = fixed ? FIXED_STYLE : {};

    return (
        <View
            style={StyleSheet.flatten([
                styles.container,
                {
                    backgroundColor,
                    height,
                    paddingTop,
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                    ...shadow,
                    ...fixedStyle,
                },
                style,
            ])}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        zIndex: 160,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});
