---
id: list-item
title: ListItem
sidebar_label: ListItem
---

## ListItem

List element that render with transition

![ListItem](assets/component-list-item.gif)

```
import React from 'react';
import { Container, Text, ListItem } from 'react-native-simple';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DATA = [
  {
    id: '1',
    content: 'item1',
  },
  {
    id: '2',
    content: 'item2',
  },
  {
    id: '3',
    content: 'item3',
  },
  {
    id: '4',
    content: 'item4',
  },
];

export default () => {
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {DATA.map(({ content, id }) => (
          <ListItem style={styles.card} key={id}>
            <Text fontSize="medium">{content}</Text>
          </ListItem>
        ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 30,
    height: '100%',
  },
  card: {
    width: '80%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 10,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
});


```

## Props

### `style`

Style properties of the `ListItem`

| Type                   | Default |
| ---------------------- | ------- |
| `StyleProp<ViewStyle>` |         |

### `children`

Children component of the `ListItem`

| Type        | Default |
| ----------- | ------- |
| `ReactNode` |         |

## Examples
