import React, { useReducer, createContext, FC, useEffect } from 'react';

import { initialState, initializer, TodosReducer} from '../reducers/todos.reducer';

type actionType = {
  type: string,
  payload: string
}

interface TodosContextData {
  todos: string[];
  dispatchTodos: React.Dispatch<actionType>;
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
