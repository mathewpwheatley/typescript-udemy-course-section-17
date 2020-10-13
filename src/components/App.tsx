import React from 'react'
import { connect } from 'react-redux'
import { ToDo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: ToDo[]
  fetchTodos(): any
}

class _App extends React.Component<AppProps> {
  render() {
    return <div>Hi There</div>
  }
}

const mapStateToProps = (state: StoreState): { todos: ToDo[] } => {
  return { todos: state.todos }
}

export const App = connect(mapStateToProps, { fetchTodos })(_App)
