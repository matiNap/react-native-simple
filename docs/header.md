---
id: header
title: Header
sidebar_label: Header
---

## Header

Header is navigation component that display information and actions of the current screen

![Header](assets/component-header.jpg)

```
import React from 'react';
import { Text, Container, Header, Row } from 'react-native-simple';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default () => {
  return (
    <Container>
      <Header>
        <Row>
          <Feather name="menu" style={styles.icon} />
          <Text fontSize="medium">Title</Text>
        </Row>
        <Feather name="home" style={styles.icon} />
      </Header>
    </Container>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 32,
    color: '#2f2f2f',
  },
});

```

## Props

### `backgroundColor`

Background color that can be selecte from theme by name or pass color as string

| Type                                        | Default     |
| ------------------------------------------- | ----------- |
| [`SimpleBackgroundColor`](customization.md) | `"primary"` |

### `shadow`

Shadow of the header

| Type                               | Default     |
| ---------------------------------- | ----------- |
| [`SimpleShadow`](customization.md) | `"primary"` |

### `fixed`

Position of the header

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

### `borderRadius`

Radius of bottom borders

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

### `translucent`

If set to true header will display under status bar

| Type                 | Default              |
| -------------------- | -------------------- |
| `string` or `number` | `SCREEN_HEIGHT*0.12` |

### `height`

Height of the `Header`

| Type      | Default |
| --------- | ------- |
| `boolean` | `true`  |

### `style`

Style properties of the `Header`

| Type                   | Default |
| ---------------------- | ------- |
| `StyleProp<ViewStyle>` |         |

### `children`

Children of the `Header`

| Type        | Default |
| ----------- | ------- |
| `ReactNode` |         |

## Examples
