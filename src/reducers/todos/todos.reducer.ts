import { todosTypes } from './todos.types';

type actionType = {
  type: string,
  payload: string
}

export const initialState: string[] = [];
export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("localTodos") || '[]') || initialValue;

export const TodosReducer = (state: string[], action: actionType) => {
  switch (action.type) {
    case todosTypes.ADD_TODO:
      console.log('state', state);
      return [...state, action.payload]
    case todosTypes.REMOVE_TODO:
      return state.filter(state => state !== action.payload)
    default:
      return state;
  }
};