import renderer from 'react-test-renderer';
import Home from './home.component';

jest
  .mock('../../components/todo-list/todo-list.component', () => 'TodoListComponent');

describe('Home Snap Test', () => {
  test('should render correctly', () => {
    const component = renderer.create(
      <Home />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
