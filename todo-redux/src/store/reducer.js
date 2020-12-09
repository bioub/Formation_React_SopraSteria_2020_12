import { createReducer } from "@reduxjs/toolkit";
import { todoAdd, todoChange } from "./actions";

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

export const todosReducer = createReducer(initialState.todos, {
  [todoAdd]: (state, action) => [...state, action.payload],
});

export const newTodoReducer = createReducer(initialState.newTodo, {
  [todoChange]: (state, action) => action.payload,
});

export const reducer = {
  todos: todosReducer,
  newTodo: newTodoReducer,
};
