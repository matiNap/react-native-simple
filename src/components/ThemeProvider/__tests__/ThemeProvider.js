import 'jsdom-global/register';
import React from 'react';
import { expect, it } from '@jest/globals';
import ThemeProvider from '../index';
import { shallow, mount } from 'enzyme';
import { View } from 'react-native';
import toJson from 'enzyme-to-json';
import useTheme from '../useTheme';
import withTheme from '../withTheme';

describe('Theme provider', () => {
  it('Should override theme with hook', () => {
    const wrapper = shallow(
      <ThemeProvider
        theme={{
          palette: {
            accent: 'red',
          },
        }}
      >
        {() => {
          const theme = useTheme();
          return <View />;
        }}
      </ThemeProvider>,
    );
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should override theme with hoc', () => {
    const Child = withTheme(() => {
      return <View />;
    });
    const wrapper = mount(
      <ThemeProvider
        theme={{
          palette: {
            accent: 'red',
          },
        }}
      >
        <Child />
      </ThemeProvider>,
    );
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
