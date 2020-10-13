import { DeleteTodoAction, FetchTodosAction } from './todos'

export enum ActionTypes {
  fetchToDos,
  deleteToDo,
}

export type Action = FetchTodosAction | DeleteTodoAction
