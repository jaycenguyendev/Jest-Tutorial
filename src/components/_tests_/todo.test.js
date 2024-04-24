import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TodoList from '../todoList';

afterEach(() => {
    cleanup();
});

test('should render not completed todo', () => {
    const todo = { id: 1, title: 'wash dishes 🍽🍽', completed: false, };

    //We render a simulated version of the react component
    // create instance of the TodoList
    render(<TodoList todo={todo} />);

    //get the value of the testId stored on the Todo component
    const todoElement = screen.getByTestId('todo-1');

    //get a child within the testId with the class mytodo
    const h1Element = todoElement.querySelector('.mytodo');


    //We test todoElement and h1Element to see whether their in the DOM

    expect(todoElement).toBeInTheDocument(); //Passes if the Todo component is present in the DOM

    expect(h1Element).toBeInTheDocument(); //passes if the .myTodo is present in the DOM

    //checks 'wash dishes' is in todoElement
    expect(todoElement).toHaveTextContent('wash dishes');

    //checks #todo is an attribute
    expect(h1Element).toHaveAttribute('id');
});
test('should render completed todo', () => {
    const todo = { id: 2, title: 'wash car', completed: true };

    render(<TodoList todo={todo} />);
    const todoElement = screen.getByTestId('todo-2');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).not.toContainHTML('<strike>');
    expect(todoElement).toHaveTextContent('wash car');
});

test('matches snapshot', () => {
    const todo = { id: 1, title: 'wash dishes', completed: false, };

    const tree = renderer.create(<TodoList todo={todo} />).toJSON();

    // Create snapshot
    expect(tree).toMatchSnapshot();
}); 
