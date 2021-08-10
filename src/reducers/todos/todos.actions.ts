import { ActionTypes } from './todos.types';

interface AddTodoAction {
  type: ActionTypes.ADD_TODO,
  payload: string
}

interface RemoveTodoAction {
  type: ActionTypes.REMOVE_TODO,
  payload: string
}

export type ActionType = 
  | AddTodoAction
  | RemoveTodoAction;

export const addTodoAction = (payload: string): AddTodoAction => ({
  type: ActionTypes.ADD_TODO,
  payload
});

export const removeTodoAction = (payload: string): RemoveTodoAction => ({
  type: ActionTypes.REMOVE_TODO,
  payload
});
