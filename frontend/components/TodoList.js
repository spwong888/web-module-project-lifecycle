import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div id="todos"> 
          <h2>Todos:</h2>
          {
            this.props.todos.reduce((acc, todo) => {
              if (this.props.displayCompleteds || !todo.completed) return acc.concat(
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggleCompleted={this.props.toggleCompleted}
                />
              )
              return acc
            }, [])
          }
        </div>
    )
  }
}
