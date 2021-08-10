import { todosTypes } from "./todos.types"

interface todoActionResult {
  type: string;
  payload: string;
}

export const addTodoAction = (payload: string): todoActionResult => ({
  type: todosTypes.ADD_TODO,
  payload
});

export const removeTodoAction = (payload: string): todoActionResult => ({
  type: todosTypes.REMOVE_TODO,
  payload
});
