import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  removeTodo() {
    this.props.removeTodo(this.props.todo);
  }

  updateTodo() {
    this.props.todo.done = !this.props.todo.done;
    this.props.receiveTodo(this.props.todo);
  }

  render() {
    const { title, done } = this.props.todo;
    return (
      <div>
        <li>{ title }</li>
        <button onClick={ this.updateTodo }>
          {done ? "Undo":"Done"}
        </button>
        <button onClick={ this.removeTodo }>Delete Todo</button>
      </div>
    );
  }
}

export default TodoListItem;
