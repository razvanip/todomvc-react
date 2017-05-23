import React, {Component} from 'react';
import Todo from './todo';


export default class TodoList extends Component {
  renderTodoItems(todos) {
    return todos.map((todo)=> {
      return <Todo key={todo.id} {...todo} {...this.props.actions} />
    })
  }

  render() {
    const {todos} = this.props;
    return (
      <ul className="todo-list">
        {this.renderTodoItems(todos)}
      </ul>
    );
  }
}