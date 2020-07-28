import { Platform, Dimensions, StatusBar } from 'react-native';

const isIos = Platform.OS === 'ios';

const metrics: {
    screen: { height: number; width: number };
    window: { height: number; width: number };
    statusBarHeight: number;
} = {
    screen: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    window: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    statusBarHeight: isIos ? 20 : StatusBar.currentHeight,
};
export default metrics;
