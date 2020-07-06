import { normalize } from '../helpers';

export default {
    palette: {
        primary: '#ededed',
        secondary: '#bfbfbf',
        accent: '#b626e2',
        text: {
            primary: '#333333',
            secondary: '#f2f2f2',
        },
    },
    paletteDark: {
        primary: '#494949',
        secondary: '#727272',
        accent: '#b626e2',
        text: {
            secondary: '#333333',
            primary: '#f2f2f2',
        },
    },
    typography: {
        primaryFont: undefined,
        fontSize: {
            small: normalize(15),
            normal: normalize(20),
            medium: normalize(25),
            big: normalize(24),
            header: normalize(28),
        },
    },
};
