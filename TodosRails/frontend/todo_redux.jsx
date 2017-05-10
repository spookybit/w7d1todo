import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, rootElement);
});



// testing
// import {allTodos} from "./reducers/selectors";
import {receiveTodo, receiveTodos, fetchTodos} from "./actions/todo_actions";
// window.store = store;
// window.receiveTodo = receiveTodo;
window.fetchTodos = fetchTodos;
// window.allTodos = allTodos;
