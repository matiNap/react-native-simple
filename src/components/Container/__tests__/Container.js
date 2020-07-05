import React from 'react';
import { shallow } from 'enzyme';
import Container from '../index';
import toJson from 'enzyme-to-json';
import { describe, expect, it } from '@jest/globals';
import { Text } from 'react-native';

describe('Container component', () => {
  it('Should render', () => {
    const wrapper = shallow(<Container />);

    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should render with child', () => {
    const wrapper = shallow(
      <Container>
        <Text>Render with children</Text>
      </Container>,
    );

    expect(wrapper.length).toBe(1);

    expect(wrapper.children()).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should render with style', () => {
    const wrapper = shallow(
      <Container style={{ backgroundColor: 'black' }} />,
    );

    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
