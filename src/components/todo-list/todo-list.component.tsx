import { useState, useContext, FC} from 'react'
import { TodosContext } from '../../contexts/todos.context';
import { addTodoAction, removeTodoAction } from '../../reducers/todos/todos.actions';

import './todo-list.styles.scss';

const TodoList: FC = () => {
  const [ inputTodo, setInputTodo ] = useState<string>('');
  const [ inputInvalid, setInputInvalid ] = useState<string>('');
  const { todos, dispatchTodos } = useContext(TodosContext);

  const _onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(event.target.value);
    setInputInvalid('');
  };

  const _onInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputTodo.trim()) {
      if (todos.includes(inputTodo)) {
        setInputInvalid('invalid');
      } else {
        setInputTodo('');
  
        dispatchTodos(addTodoAction(inputTodo));
      }
    }
  };

  const _onClickRemoveTodo = (todo: string) => () => {
    dispatchTodos(removeTodoAction(todo));
  };

  const _renderList = () => todos.length ? (
    <ul className='Todos-list'>
      {todos.map(todo => {
        return (
          <li 
            key={todo}
            className='Todos-list-item'
          >
            <p>{todo}</p>
            <button 
              className='Todos-remove-btn' 
              onClick={_onClickRemoveTodo(todo)}
            >Done</button>
          </li>
        )
      })}
    </ul>
  ) : (
    <p className='Todos-empty'>No Todo yet..</p>
  );

  const _renderInputInvalid = () => !!inputInvalid && (
    <p className='Todos-invalid'>You already added one..</p>
  );

  return (
    <div>
        <h3>Todos List (useReducer)</h3>
        {_renderList()}

        <form 
          className='Todos-form' 
          onSubmit={_onInputSubmit}
        >
          <div>
            <input 
              className='Todos-input'
              onChange={_onInputChange} 
              value={inputTodo} 
              placeholder='Add Todo...' 
            />
          </div>

          <button className='Todos-submit-btn' type='submit'>Add Todo</button>
        </form>
        {_renderInputInvalid()}
    </div>
  )
}

export default TodoList
