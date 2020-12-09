import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  todoAdd,
  todoChange,
  usersFetchRequested,
  usersFetchSuccess,
} from "./actions";

const initialState = {
  users: {
    loading: false,
    data: [],
  },
  todos: {
    newTodo: "Achet",
    items: [
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
  },
};

export const itemsReducer = createReducer(initialState.todos.items, {
  [todoAdd]: (state, action) => [...state, action.payload],
});

export const newTodoReducer = createReducer(initialState.todos.newTodo, {
  [todoChange]: (state, action) => action.payload,
});

export const todosReducer = combineReducers({
  items: itemsReducer,
  newTodo: newTodoReducer,
});

export const usersLoadingReducer = createReducer(initialState.users.loading, {
  [usersFetchRequested]: (state, action) => true,
  [usersFetchSuccess]: (state, action) => false,
});

export const usersDataReducer = createReducer(initialState.users.data, {
  [usersFetchSuccess]: (state, action) => action.payload,
});

export const usersReducer = combineReducers({
  loading: usersLoadingReducer,
  data: usersDataReducer,
});

// export const usersReducer = createReducer(initialState.users, {
//   [usersFetchRequested]: (state, action) => ({ ...state, loading: true }),
//   [usersFetchSuccess]: (state, action) => ({
//     ...state,
//     loading: false,
//     data: action.payload,
//   }),
// });

const reducer = {
  todos: todosReducer,
  users: usersReducer,
};

export default reducer;
