import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export default interface ColumnProps {
    children: ReactNode[] | ReactNode;
    style?: StyleProp<ViewStyle>;
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
