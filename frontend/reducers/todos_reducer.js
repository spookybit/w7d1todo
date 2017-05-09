import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, receiveTodo, receiveTodos, removeTodo} from "../actions/todo_actions";
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: "Wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "Wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      newState = {};
      newState = action.todos;
      return newState;
    case RECEIVE_TODO:
      const newTodo = {};
      console.log(state);
      newTodo[action.todo.id] = action.todo;
      newState = merge({}, state, newTodo);
      return newState;
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
