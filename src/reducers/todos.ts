import { ToDo, Action, ActionTypes } from '../actions'

export const todosReducer = (state: ToDo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchToDos:
      return action.payload
    default:
      return state
  }
}
