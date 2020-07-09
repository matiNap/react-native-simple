import React, { ReactNode } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { pickBackroundPaletteColor } from '../../helpers';
import useTheme from '../ThemeProvider/useTheme';
import { SimpleBackgroundColor } from '../../types';

interface Props {
    children: ReactNode[] | ReactNode;
    style?: StyleProp<ViewStyle>;
    borderRadius?: number;
    backgroundColor?: SimpleBackgroundColor;
    width?: string;
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
    children,
    style,
    borderRadius,
    backgroundColor,
    width,
    justifyContent,
    align,
}: Props) {
    const theme = useTheme();
    return (
        <View
            style={[
                styles.container,
                {
                    width,
                    justifyContent,
                    backgroundColor: pickBackroundPaletteColor(
                        theme,
                        backgroundColor,
                    ),
                    borderRadius,
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
        width: '100%',
        flexDirection: 'row',
    },
});
