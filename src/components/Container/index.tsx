import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { SimpleBackgroundColor } from '../../types';
import { getThemeColor } from '../../helpers';
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
                    backgroundColor: getThemeColor(
                        backgroundColor,
                        theme.currentPalette,
                        theme.currentPalette.primary,
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
