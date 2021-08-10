import React, { useReducer, createContext, FC, useEffect } from 'react';

import { initialState, initializer, TodosReducer} from '../reducers/todos/todos.reducer';
import { ActionType } from '../reducers/todos/todos.actions';

interface TodosContextData {
  todos: string[];
  dispatchTodos: React.Dispatch<ActionType>;
}

export const TodosContext = createContext<TodosContextData>({
  todos: [],
  dispatchTodos: () => {}
});

const TodosContextProvider: FC = ({ children }) => {
  const [todos, dispatchTodos ] = useReducer(TodosReducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, dispatchTodos }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
