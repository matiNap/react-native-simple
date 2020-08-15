import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import { SimpleBackgroundColor } from '.';

export interface LocalRowProps {
    style?: StyleProp<ViewStyle>;
    backgroundColor?: SimpleBackgroundColor;
    width?: string | number;
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

export default interface Props extends LocalRowProps {
    children: ReactNode[] | ReactNode;
}
