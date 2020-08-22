---
id: image-gallery
title: ImageGallery
sidebar_label: ImageGallery
---

## ImageGallery

Header is navigation component that display information and actions of the current screen

![ImageGallery](assets/component-image-gallery.gif)

```tsx
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Column, Text, Container, ImageGallery } from 'rns';

const images = [
    {
        uri:
            'https://images.unsplash.com/photo-1452541794508-9761132dbef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        label: 'Penguin',
        id: '1',
    },
    {
        uri:
            'https://images.unsplash.com/photo-1524125833033-bc59e523d3e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1370&q=80',
        label: 'Koala',
        id: '2',
    },
    {
        uri:
            'https://images.unsplash.com/photo-1551270988-87c5ea57cdfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1286&q=80',
        label: 'Kangaroo',
        id: '3',
    },
];

const renderImageChildren = (label: string, uri: string) => (
    <Column style={{ paddingVertical: 5, paddingHorizontal: 10 }} key={uri}>
        <Text color="secondary">{label}</Text>
    </Column>
);

const Screen1 = () => {
    const [currentImage, setCurrentImage] = useState(1);

    return (
        <Container style={styles.container}>
            <ImageGallery
                onChange={(current) => {
                    setCurrentImage(current);
                }}
                imageHeight={300}
                images={images.map(({ uri, label, id }) => ({
                    uri,
                    children: renderImageChildren(label, uri),
                    key: id,
                }))}
            >
                <View style={styles.counter}>
                    <Text
                        color="secondary"
                        fontSize="small"
                    >{`${currentImage}/${images.length}`}</Text>
                </View>
            </ImageGallery>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    counter: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});

export default Screen1;
```

## Props

### `imageHeight`

Height of images

| Type     | Default |
| -------- | ------- |
| `number` |         |

### `images`

List of display data for current image

| Type     | Default |
| -------- | ------- |
| `object` |         |

-   `uri` - URI of image
-   `children` - component for current image
-   `id` - specific id for `key` prop

### `children`

Children that display over images

| Type        | Default |
| ----------- | ------- |
| `ReactNode` |         |

### `containerStyle`

Style of the container

| Type                   | Default |
| ---------------------- | ------- |
| `StyleProp<ViewStyle>` |         |

### `onChange`

Is called when image has been swiped
| Type | Default |
| ---------------------- | ------- |
| `(current:number)=>void` | |
