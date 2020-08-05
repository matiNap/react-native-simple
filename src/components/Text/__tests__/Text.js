import React from 'react';
import { shallow } from 'enzyme';
import Text from '../index';
import toJson from 'enzyme-to-json';

describe('Text component', () => {
    it('Should render', () => {
        const wrapper = shallow(<Text>text</Text>);

        expect(wrapper.length).toBe(1);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render text color', () => {
        const wrapper = shallow(<Text color="primary">text</Text>);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render text fontSize', () => {
        const wrapper = shallow(<Text fontSize="medium">text</Text>);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render with style', () => {
        const wrapper = shallow(
            <Text style={{ backgroundColor: 'blue' }}>text</Text>,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
