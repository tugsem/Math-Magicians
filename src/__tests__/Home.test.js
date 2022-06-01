import react from 'react';
import renderer  from 'react-test-renderer';
import Home from '../pages/Home';

it('Renders correctly',()=>{
    const home = renderer.create(
        <Home />).toJSON();
        expect(home).toMatchSnapshot();
})