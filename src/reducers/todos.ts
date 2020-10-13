import { ToDo, Action, ActionTypes } from '../actions'

export const todosReducer = (state: ToDo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchToDos:
      return action.payload
    case ActionTypes.deleteToDo:
      return state.filter((todo: ToDo) => todo.id !== action.payload)
    default:
      return state
  }
}
