import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import metrics from '../../theme/metrics';
import useTheme from '../ThemeProvider/useTheme';
import { getThemeColor } from '../../helpers';
import { SimpleBackgroundColor } from '../../types';

interface Shadow {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
}

interface Props {
    height?: number;
    backgroundColor?: SimpleBackgroundColor;
    shadow?: 'default' | Shadow | null | undefined;
    translucent?: boolean | undefined;
    children?: ReactNode | ReactNode[];
    borderRadius?: number;
    style?: StyleProp<ViewStyle>;
    fixed?: boolean | undefined;
}

const DEFAULT_HEIGHT = metrics.screen.height * 0.12;
const DEFAULT_SHADOW = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
};

const FIXED_STYLE = {
    position: 'absolute',
    top: 0,
    left: 0,
};

export const getShadow = (shadow: 'default' | Shadow | null | undefined) => {
    if (shadow === null) return {};
    else if (shadow && shadow === 'default') {
        return DEFAULT_SHADOW;
    } else return shadow;
};

export default ({
    children,
    translucent = true,
    borderRadius,
    style,
    fixed,
    ...props
}: Props) => {
    const theme = useTheme();
    const { currentPalette } = theme;
    const backgroundColor = props.backgroundColor
        ? getThemeColor(
              props.backgroundColor,
              theme.currentPalette,
              theme.currentPalette.primary,
          )
        : currentPalette.accent;
    const height = props.height ? props.height : DEFAULT_HEIGHT;
    const paddingTop = translucent ? metrics.statusBarHeight + 10 : 0;
    const shadow = getShadow(props.shadow);
    const fixedStyle = fixed ? FIXED_STYLE : {};
    return (
        <View
            style={[
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
            ]}
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
    },
});
