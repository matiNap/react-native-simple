import React from 'react';
import { shallow } from 'enzyme';
import { describe, expect, it } from '@jest/globals';
import Header from '../index';
import toJson from 'enzyme-to-json';
import { Text } from 'react-native';

describe('Header component', () => {
    it('Should render', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.length).toBe(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render child', () => {
        const wrapper = shallow(
            <Header>
                <Text>A</Text>
            </Header>,
        );

        expect(wrapper.find(Text).length).toBe(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render multiple childs', () => {
        const wrapper = shallow(
            <Header>
                <Text>A</Text>
                <Text>B</Text>
            </Header>,
        );

        expect(wrapper.find(Text).length).toBe(2);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render with style', () => {
        const wrapper = shallow(<Header style={{ width: '80%' }} />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render with shadow', () => {
        const wrapper = shallow(<Header shadow="default" />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render fixed', () => {
        const wrapper = shallow(<Header shadow="default" fixed />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render rounded borders', () => {
        const wrapper = shallow(<Header borderRadius={20} />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('Should render with new backround color', () => {
        const wrapper = shallow(
            <Header borderRadius={20} backgroundColor="#313131" />,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
