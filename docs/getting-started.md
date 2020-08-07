---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Installation

```
npm install react-native-simple
```

## Install dependencies

React Native Simple uses [`react-native-redash`](https://github.com/wcandillon/react-native-redash) and [`react-native-reanimated`](https://github.com/software-mansion/react-native-reanimated) for efficiency animations

```
npm install react-native-redash react-native-reanimated
```

## Hello World

```
import React from 'react';
import { Container, Text } from 'react-native-simple';
import { StyleSheet } from 'react-native';

const HelloWorld = () => {
  return (
    <Container style={styles.container}>
      <Text fontSize="big">Hello World</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HelloWorld;

```
