interface AddTodoAction {
  type: 'ADD_TODO',
  payload: string
}

interface RemoveTodoAction {
  type: 'REMOVE_TODO',
  payload: string
}

export const addTodoAction = (payload: string): AddTodoAction => ({
  type: 'ADD_TODO',
  payload
});

export const removeTodoAction = (payload: string): RemoveTodoAction => ({
  type: 'REMOVE_TODO',
  payload
});
