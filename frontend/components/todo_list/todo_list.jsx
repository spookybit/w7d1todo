import React from "react";
import TodoListItem from "./todo_list_item";

function TodoList({ todos }) {
  const todoListItems = todos.map((todo, idx) =>
    <TodoListItem key={idx} todo={todo} />
  );
  return (
    <ul>
      { todoListItems }
    </ul>
  );
}

export default TodoList;
