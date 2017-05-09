import React from 'react';
import uniqueId from '../../util/idGenerator';

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: "", done: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return event => this.setState({[property]: event.currentTarget.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTodo = this.state;
    newTodo.id = uniqueId();
    this.props.receiveTodo(newTodo);
    this.setState({title: "", body: ""});
  }

  render() {
    return (
      <div>
        <h4>Add a new Todo</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input onChange={this.update('title')}type="text" value={this.state.title}></input>
          </label>

          <br /><br />

          <label>
            Body:
            <br />
            <textarea onChange={this.update('body')} rows={5} cols={40} value={ this.state.body }>
            </textarea>
          </label>

          <br /><br />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoListForm;
