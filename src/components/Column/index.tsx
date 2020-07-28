import React, { ReactNode } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { pickBackroundPaletteColor, getThemeColor } from '../../helpers';
import useTheme from '../ThemeProvider/useTheme';

interface Props {
    children: ReactNode[] | ReactNode;
    style?: StyleProp<ViewStyle>;
    borderRadius?: number;
    backgroundColor?: string;
    height?: string;
    justifyContent?:
        | 'space-between'
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-around'
        | 'space-evenly'
        | undefined;
    align?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'auto'
        | 'stretch'
        | 'baseline'
        | undefined;
}

export default function ({
    justifyContent,
    height,
    backgroundColor,
    style,
    children,
    align,
}: Props) {
    const theme = useTheme();
    return (
        <View
            style={[
                styles.container,
                {
                    justifyContent,
                    height,
                    backgroundColor: getThemeColor(
                        backgroundColor,
                        theme.currentPalette,
                        theme.currentPalette.primary,
                    ),
                    alignSelf: align,
                },
                style,
            ]}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
});
