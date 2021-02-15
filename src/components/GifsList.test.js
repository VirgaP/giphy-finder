import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import GifsList from './GifsList';

configure({adapter: new Adapter()});

describe(GifsList, () => {
    const component = shallow(< GifsList data={[]}/>);
    it('should exist', () => {
        const component = renderer.create(<GifsList data={[]}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
