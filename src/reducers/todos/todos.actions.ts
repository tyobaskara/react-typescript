import { todosTypes } from "./todos.types"

export const addTodoAction = (payload: string) => ({
  type: todosTypes.ADD_TODO,
  payload
});

export const removeTodoAction = (payload: string) => ({
  type: todosTypes.REMOVE_TODO,
  payload
});
