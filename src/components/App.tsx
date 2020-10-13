import React from 'react'
import { connect } from 'react-redux'
import { ToDo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: ToDo[]
  //   fetchTodos: typeof fetchTodos
  fetchTodos: Function
  deleteTodo: typeof deleteTodo
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos()
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id)
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: ToDo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): { todos: ToDo[] } => {
  return { todos: state.todos }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
