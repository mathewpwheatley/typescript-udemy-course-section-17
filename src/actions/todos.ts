import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

const url = 'https://jsonplaceholder.typicode.com/todos'

export interface ToDo {
  id: number
  title: string
  completed: boolean
}

export interface FetchTodosAction {
  type: ActionTypes.fetchToDos
  payload: ToDo[]
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteToDo
  payload: number
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDo[]>(url)
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchToDos,
      payload: response.data,
    })
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteToDo,
    payload: id,
  }
}
