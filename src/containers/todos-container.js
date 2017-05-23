import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import TodoEditInput from '../components/todo-edit-input';
import TodoList from '../components/todos-list';
import Footer from '../components/footer';

import {getTodos} from '../api/getTodos';

export default class TodosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  static defaultProps = {
    title: 'Todos Title',
    todos: []
  };

  static propTypes = {
    todos: PropTypes.array.isRequired,
  };

  addTodo(text) {
    const todos = [
      {
        text: text,
        completed: false,
        id: this.state.todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1
      },
      ...this.state.todos,
    ];

    this.setState({todos})
  }

  completeTodo(todoId) {
    const todos = this.state.todos.map((todo)=> {
      return todo.id === todoId ? {
        ...todo,
        completed: !todo.completed,
      } : todo
    });

    this.setState({todos})
  }

  completeAllTodos() {

    const allCompleted = this.state.todos.every(todo => todo.completed);

    const todos = this.state.todos.map((todo)=> {
      return {
        ...todo,
        completed: !allCompleted,
      }
    });

    this.setState({todos});
  }

  deleteTodo(todoId) {
    const todos = this.state.todos.filter((todo)=> {
      return todo.id !== todoId
    });

    this.setState({todos});
  }

  editTodo(text, todoId) {
    const todos = this.state.todos.map((todo)=> {
      return todo.id === todoId ? {
        ...todo,
        text: text,
      } : todo
    });

    this.setState({todos})
  }

  clearAllTodos() {
    this.setState({todos: []})
  }

  actions = {
    addTodo: this.addTodo.bind(this),
    completeTodo: this.completeTodo.bind(this),
    completeAllTodos: this.completeAllTodos.bind(this),
    deleteTodo: this.deleteTodo.bind(this),
    clearAllTodos: this.clearAllTodos.bind(this),
    editTodo: this.editTodo.bind(this),
  };

  componentDidMount() {
    getTodos().then((todosData)=> {
      this.setState({
        todos: todosData,
      })
    })
  }

  render() {
    return (
      <div>
        {this.props.title}
        <Header>
          <TodoEditInput isNewTodo {...this.actions} text="I fetched some day"/>
        </Header>
        <TodoList todos={this.state.todos} actions={this.actions}/>
        <Footer/>
      </div>
    )
  }
}