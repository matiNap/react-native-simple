import React, { CSSProperties } from 'react';
import { StyleSheet, View, StyleProp } from 'react-native';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<CSSProperties>;
}

export default function Container({ children, style }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
