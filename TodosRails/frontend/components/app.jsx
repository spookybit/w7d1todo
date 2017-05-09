import React from "react";
import TodoListContainer from "./todo_list/todo_list_container";

function App({ store }) {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoListContainer />
    </div>
    );
}

export default App;
