import renderer  from 'react-test-renderer';
import Quote from '../pages/Quote';

it('Renders correctly',()=>{
    const tree = renderer.create(
        <Quote />).toJSON();
        expect(tree).toMatchSnapshot();
})