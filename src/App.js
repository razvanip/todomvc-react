import React, { Component } from 'react';
import TodosContainer from './containers/todos-container';

class App extends Component {
  render() {
    return (
      <div className="todoMvc">
        <TodosContainer/>
      </div>
    );
  }
}

export default App;
