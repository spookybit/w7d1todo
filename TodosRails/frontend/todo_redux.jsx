import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchTodos } from "./util/todo_api_util";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootElement);

});

window.fetchTodos = fetchTodos;


// testing
// import {allTodos} from "./reducers/selectors";
// import {receiveTodo, receiveTodos} from "./actions/todo_actions";
// window.store = store;
// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos;
// window.allTodos = allTodos;
