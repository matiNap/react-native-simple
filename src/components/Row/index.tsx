import React, { ReactNode } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

interface Props {
    children: ReactNode[] | ReactNode;
    style?: StyleProp<ViewStyle>;
    borderRadius?: number;
    backgroundColor?: string;
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
    return (
        <View
            style={[
                styles.container,
                {
                    width,
                    justifyContent,
                    backgroundColor,
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
