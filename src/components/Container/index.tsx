import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

interface Props {
  children?: React.ReactNode;
  style: StyleProp<ViewStyle>;
}

export default function Container({ children, style }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
