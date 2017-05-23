import React, { Component } from 'react';

export default class TodosClearAll extends Component {
  render() {
    return (
      <button onClick={ this.props.clearAllTodos }>Clear all</button>
    );
  }
}