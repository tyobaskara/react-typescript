import { Action } from './todos.actions';
import { ActionTypes } from './todos.types';

type TodosState = string[];

export const initialState: string[] = [];
export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("localTodos") || '[]') || initialValue;

export const TodosReducer = (state: TodosState, action: Action): TodosState => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.payload]
    case ActionTypes.REMOVE_TODO:
      return state.filter(state => state !== action.payload)
    default:
      return state;
  }
};
