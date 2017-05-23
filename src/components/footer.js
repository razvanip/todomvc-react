import React, {Component} from 'react';
import TodosClearAll from './todos-clear-all';

export default class Footer extends Component {
  render() {
    return (
      <div>
        Footer

        <TodosClearAll { ...this.props }/>
      </div>
    );
  }
}