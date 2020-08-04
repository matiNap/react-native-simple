import { Platform, Dimensions, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

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
    statusBarHeight: isIos ? 20 : StatusBarManager.HEIGHT,
};
export default metrics;
