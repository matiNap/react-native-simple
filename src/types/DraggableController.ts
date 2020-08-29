export interface GestureHandlerType {
    onHandlerStateChange: (...args: any[]) => void;
    onGestureEvent: (...args: any[]) => void;
}

export default interface Props {
    children: React.ReactNode;
    gestureHandler: GestureHandlerType;
}
