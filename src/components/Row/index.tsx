import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getThemeColor, getProperty } from '../../helpers';
import useTheme from '../ThemeProvider/useTheme';
import Props from '../../types/Row';

export default function ({
    children,
    style,
    backgroundColor,
    width,
    justifyContent,
    align,
}: Props) {
    const theme = useTheme();
    const { Row } = theme;
    return (
        <View
            style={StyleSheet.flatten([
                getProperty([Row?.style]),
                styles.container,
                {
                    width: getProperty([Row?.width, width]),
                    justifyContent: getProperty([
                        Row?.justifyContent,
                        justifyContent,
                    ]),
                    backgroundColor: getThemeColor(
                        getProperty([Row?.backgroundColor, backgroundColor]),
                        theme.currentPalette,
                    ),

                    alignSelf: getProperty([Row?.align, align]),
                },
                style,
            ])}
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
