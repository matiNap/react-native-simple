import { Dimensions, PixelRatio } from 'react-native';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'screen',
);

export function normalize(size: number): number {
  const newSize = size * (SCREEN_HEIGHT / SCREEN_WIDTH);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
