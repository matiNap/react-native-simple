import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import Row from '../index';
import toJson from 'enzyme-to-json';

describe('Row component', () => {
    it('Should render', () => {
        const wrapper = shallow(<Row />);

        expect(wrapper.length).toBe(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render with style', () => {
        const wrapper = shallow(
            <Row
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
            <Row>
                <View />
                <View />
                <View />
                <View />
            </Row>,
        );

        expect(wrapper.length).toBe(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
