import react from 'react';
import renderer  from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Renders correctly',()=>{
    const tree = renderer.create(
        <Calculator />).toJSON();
        expect(tree).toMatchSnapshot();
})