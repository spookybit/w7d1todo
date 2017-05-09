import React from "react";
import TodoListItem from "./todo_list_item";
import TodoListForm from "./todo_form";

class TodoList extends React.Component {
  render () {
    const { todos, receiveTodo, removeTodo } = this.props;
    const todoListItems = todos.map((todo, idx) =>
      <TodoListItem
        key={idx}
        todo={todo}
        removeTodo={removeTodo}
        receiveTodo={receiveTodo} />
    );
    return (
      <div>
        <ul>
          { todoListItems }
        </ul>
        <TodoListForm receiveTodo={ receiveTodo } />
      </div>
    );
  }
}

export default TodoList;
