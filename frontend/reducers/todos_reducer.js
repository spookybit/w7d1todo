import {RECEIVE_TODOS, RECEIVE_TODO, receiveTodo, receiveTodos} from "../actions/todo_actions";
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
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      newState = action.todos;
      return newState;
    case RECEIVE_TODO:
      const newTodo = {};
      newTodo[action.todo.id] = action.todo;
      const newState2 = merge({}, state, newTodo);
      return newState2;
    default:
      return state;
  }
};

export default todosReducer;
