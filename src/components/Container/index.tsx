import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { SimpleBackgroundColor } from '../../types';
import { pickBackroundPaletteColor } from '../../helpers';
import useTheme from '../ThemeProvider/useTheme';

interface Props {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    backgroundColor?: SimpleBackgroundColor;
}

export default function Container({ children, style, backgroundColor }: Props) {
    const theme = useTheme();

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: pickBackroundPaletteColor(
                        theme,
                        backgroundColor,
                    ),
                },
                style,
            ]}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
});
