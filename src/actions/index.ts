import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

const url = 'https://jsonplaceholder.typicode.com/todos'

interface ToDo {
  id: number
  title: string
  completed: boolean
}

interface FetchTodosAction {
  type: ActionTypes.fetchToDos
  payload: ToDo[]
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
