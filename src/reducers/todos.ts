import { ToDo, FetchTodosAction } from '../actions'
import { ActionTypes } from '../actions/types'

export const todosReducer = (state: ToDo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchToDos:
      return action.payload
    default:
      return state
  }
}
