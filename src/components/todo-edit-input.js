import React , {Component} from 'react';

export default class TodoEditInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text || ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static propTypes = {
    text: React.PropTypes.string,
    addTodo: React.PropTypes.func.isRequired
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value,
    })
  }

  handleInputBlur() {

  }

  handleKeyDown(e) {
    const {isNewTodo, addTodo} = this.props;
    if (e.which === 13) {
      if (isNewTodo) {
        addTodo(this.state.text);
      }
      this.setState({
        text: '',
      });
    }
  }

  render() {
    return (
      <input
        value={this.state.text}
        onChange={this.handleInputChange}
        onBlur={this.handleInputBlur}
        onKeyDown={this.handleKeyDown}
      />
    )
  }
}