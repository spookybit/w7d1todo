import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";
import { receiveTodo } from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootElement);
  window.store = store;
  window.receiveTodo = receiveTodo;
});


// testing
// import {allTodos} from "./reducers/selectors";
// import {receiveTodo, receiveTodos} from "./actions/todo_actions";

// window.allTodos = allTodos;

// window.receiveTodos = receiveTodos;
