---
id: sortable-list
title: SortableList
sidebar_label: SortableList
---

## SortableList

SortableList allow changing order in list

![Header](assets/component-sortable-list.gif)

```
import React from 'react';
import {
  Container,
  SortableList,
  Row,
  Text,
} from 'react-native-simple';
import { StyleSheet } from 'react-native';

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
const ITEM_HEIGHT = 60;

export default () => {
  return (
    <Container>
      <SortableList
        style={styles.listContainer}
        itemHeight={ITEM_HEIGHT}
        onReorder={(draggedIndex, switchedWithIndex) => {}}
      >
        {DATA.map(({ content, id }) => (
          <Row justifyContent="center" key={id} style={styles.card}>
            <Text>{content}</Text>
          </Row>
        ))}
      </SortableList>
    </Container>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 30,
    height: '100%',
  },
  card: {
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
    backgroundColor: 'white',

    height: ITEM_HEIGHT,
  },
});

```

## Props

### `style`

Container style of the list

| Type                   | Default     |
| ---------------------- | ----------- |
| `StylProps<ViewStyle>` | `"primary"` |

### `itemHeight`

Height of signle item in the `SortableList`
| Type | Default |
| -----| --------|
| `number` | |

### `onReorder`

Function that will be called when items have reordered
| Type | Default |
| -----| --------|
| `(draggedIndex:number,swtitchedWithIndex:number)=>void` | |

### `children`

Item that will be sortable

| Type          | Default |
| ------------- | ------- |
| `ReactNode[]` |         |

## Examples
