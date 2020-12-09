import { createAction, nanoid } from "@reduxjs/toolkit";

export const todoChange = createAction('TODO_CHANGE');
export const todoAdd = createAction('TODO_ADD', (title) => ({
  payload: {
    id: nanoid(),
    title,
    completed: false,
  },
}));
