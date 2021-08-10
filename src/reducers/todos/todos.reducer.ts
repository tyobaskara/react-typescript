interface AddTodoAction {
  type: 'ADD_TODO',
  payload: string
}

interface RemoveTodoAction {
  type: 'REMOVE_TODO',
  payload: string
}

type ActionType = 
  | AddTodoAction
  | RemoveTodoAction;

type TodosState = string[];

export const initialState: string[] = [];
export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("localTodos") || '[]') || initialValue;

export const TodosReducer = (state: TodosState, action: ActionType): TodosState => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'REMOVE_TODO':
      return state.filter(state => state !== action.payload)
    default:
      return state;
  }
};
