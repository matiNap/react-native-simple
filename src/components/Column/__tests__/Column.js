import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import Column from '../index';
import toJson from 'enzyme-to-json';

describe('Column component', () => {
    it('Should render', () => {
        const wrapper = shallow(<Column />);

        expect(wrapper.length).toBe(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render with style', () => {
        const wrapper = shallow(
            <Column
                style={{ backgroundColor: 'red' }}
                backgroundColor="blue"
                align="center"
            />,
        );

        expect(wrapper.length).toBe(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render with childs', () => {
        const wrapper = shallow(
            <Column>
                <View />
                <View />
                <View />
                <View />
            </Column>,
        );

        expect(wrapper.length).toBe(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
