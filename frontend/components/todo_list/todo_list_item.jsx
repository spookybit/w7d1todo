import React from 'react';

class TodoListItem extends React.Component {

  handleClick(e) {
    e.preventDefault();

    removeTodo(e.currentTarget.id);
  }

  render() {
    return (
      <div>
        <li>{ todo.title }</li>
        <button onClick={this.handleClick}>Delete Todo</button>
      </div>
    );
  }
}

export default TodoListItem;
