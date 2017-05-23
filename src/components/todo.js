import React, { Component } from 'react';
import TodoEditInput from './todo-edit-input';

export default class Todo extends Component {
  renderTodoEdit() {
    return (
      <TodoEditInput />
    );
  }

  renderTodo() {
    const {deleteTodo, completed, text, id, completeTodo}  = this.props;

    return (<li>
      <input type="checkbox" checked={completed} onChange={()=> completeTodo(id)}/>
      <span>{text} : {completed.toString()}</span>
      <button onClick={()=> deleteTodo(id)}>close</button>
    </li>);
  }

  render() {
    return (
      <div>
        {this.props.editing && this.renderTodoEdit()}
        {!this.props.editing && this.renderTodo()}
      </div>
    );
  }
}