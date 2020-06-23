import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
