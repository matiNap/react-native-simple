---
id: customization
title: Customization
sidebar_label: Customization
---

## Basics

### Current palette

Here are stored colors for current theme. In `<ThemeProvider/>` we can select if we want use light theme or dark theme.
If we check [`darkMode`](#dark-mode) to `true` we can access in `currentPalette` colors from dark theme

```
import { useTheme, Text } from 'react-native-simple';

const ThemeComponent = () => {
  const { currentPalette } = useTheme();

  return (
    <View style={{ backgroundColor: currentPalette.primary }}>
      <Text style={{ color: currentPalette.text.primary }}></Text>
    </View>
  );
};

```

### Palette

We can specify colors for light mode and dark mode

```
const theme = {
  //Palette for light theme
  palette: {
    //... colors
  },

  //Palette for dark theme
  paletteDark: {
    //... colors
  },
};
```

Check field for palette in [`defaultTheme`](#override-current-theme)

### Typography

```
const defaultTheme = {
     typography: {
        primaryFont: 'rubik',
        fontSize: {
            small: 15,
            normal: 20,
            medium: 25,
            big: 30,
        },
    }
}
```

### Dark Mode

```
import { ThemeProvider } from 'react-native-simple';

export default () => {
 return (
   <ThemeProvider darkMode={true}>
     <AppContainer />
   </ThemeProvider>
 );
};

```

## Get theme fields

### useTheme()

Hook for theme

```
import { useTheme } from 'react-native-simple';

const ThemeComponent = () => {
  const theme = useTheme();

  return (
   <View>
     ...
   </View>
  );
};

```

### withTheme()

Higher order component for theme

```
import React from 'react';
import {withTheme} from 'react-native-simple'
import { View } from 'react-native';

const class ThemeComponent extends React.Component{
  render(){
    return (
    <View>
      ...
    </View>
    );
  }
}


export defaultTheme withTheme(ThemeComponent);
```

## Configure theme

### Override current theme

Override default theme

```
 const defaultTheme = {
    currentPalette: {
        primary: '#ededed',
        secondary: '#fbf5f3',
        accent: '#08d31c',
        text: {
            primary: '#333333',
            secondary: '#f2f2f2',
        },
        disabled: {
            secondary: '#c7c8c9',
            primary: '#9ba1a5',
        },
    },
    palette: {
        primary: '#fceff9',
        secondary: '#fbf5f3 ',
        accent: '#08d31c',
        text: {
            primary: '#333333',
            secondary: '#f2f2f2',
        },
        disabled: {
            secondary: '#c7c8c9',
            primary: '#9ba1a5',
        },
    },
    paletteDark: {
        primary: '#494949',
        secondary: '#727272',
        accent: '#08d31c',
        text: {
            secondary: '#2f2f2f',
            primary: '#f2f2f2',
        },
        disabled: {
            secondary: '#c7c8c9',
            primary: '#9ba1a5',
        },
    },
    typography: {
        primaryFont: undefined,
        fontSize: {
            small: 15,
            normal: 20,
            medium: 25,
            big: 27,
        },
    },
};
```

### Add custom theme variables

```
const theme = {
    ...defaultThemeFields,
    specialFields:{
        specialColor:"#313131",
        specialFontSize:11
    }
}
```

## Theme types

Theme types allow users to set text colors, backround colors, border colors or font size using configuration file

```
import { ThemeProvider, Header, Text } from 'react-native-simple';

const theme = {
  palette: {
    myColor: '#313131',
    text: {
      myTextColor: '#2f2f2f',
    },
  },
  typography: {
    fontSize: {
      myFontSize: 34,
    },
  },
};

export default () => {
  return (
    <ThemeProvider darkMode={false} theme={theme}>
      <Container backgroundColor="primary">
        <Header backgroundColor="myColor">
          <Text color="primary" fontSize="normal">
            Primary theme
          </Text>
          <Text color="myTextColor" fontSize="myFontSize">
            Custom theme
          </Text>
        </Header>
      </Container>
    </ThemeProvider>
  );
};

```

### SimpleBackgroundColor

```
type SimpleBackgroundColor = string | 'primary' | 'secondary' |'accent' | undefined;
```

### SimpleTextColor

```
export type SimpleTextColor = string | 'primary' | 'secondary' | undefined;
```

### SimpleFontSize

```
export type SimpleFontSize = string
    | 'small'
    | 'normal'
    | 'medium'
    | 'big'
    | number
    | undefined;
```

## Theming with Typescript

```
import { SimpleTheme, Text } from 'react-native-simple';

const myTheme: SimpleTheme = {
  typography: {
    primaryFont: 'Rubik_500Medium',
    fontSize: {
      myFontSize: 31,
    },
  },
  someTextStyle:{
    color:'#313131'
  }
};

type ThemeType = typeof myTheme;

const ThemeComponent = () => {
  const theme = useTheme<ThemeType>();
  return <Text style={theme.someTextStyle}></Text>;
};

```
