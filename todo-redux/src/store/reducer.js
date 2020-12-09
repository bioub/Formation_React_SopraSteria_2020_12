import { combineReducers } from "redux";
import { TODO_ADD, TODO_CHANGE } from "./constants";

const initialState = {
  newTodo: "Achet",
  todos: [
    {
      id: 1,
      title: "Acheter du pain",
      completed: false,
    },
    {
      id: 2,
      title: "Aller au sport",
      completed: true,
    },
    {
      id: 3,
      title: "Utiliser Redux",
      completed: false,
    },
  ],
};

export function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];
    default:
      return state;
  }
}

export function newTodoReducer(state = initialState.newTodo, action) {
  switch (action.type) {
    case TODO_CHANGE:
      return action.payload;
    default:
      return state;
  }
}

export const reducer = combineReducers({
  todos: todosReducer,
  newTodo: newTodoReducer,
});

// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case TODO_ADD:
//       return {
//         ...state,
//         todos: todosReducer(state, action),
//       };
//     case TODO_CHANGE:
//       return {
//         ...state,
//         newTodo: newTodoReducer(state, action),
//       };
//     default:
//       return state;
//   }
// }
