import { createAction, nanoid } from "@reduxjs/toolkit";
import { fetchUsers } from "../api/users";
import { usersSelector } from "./selectors";

export const todoChange = createAction('TODO_CHANGE');
export const todoAdd = createAction('TODO_ADD', (title) => ({
  payload: {
    id: nanoid(),
    title,
    completed: false,
  },
}));


export const usersFetchRequested = createAction('USERS_FETCH_REQUESTED');
export const usersFetchSuccess = createAction('USERS_FETCH_SUCCESS');

export function usersFetch() {
  return async function(dispatch, getState) {
    const data = usersSelector(getState()).data;

    // cache de la requete
    if (data.length) {
      return;
    }

    dispatch(usersFetchRequested());
    const users =  await fetchUsers();
    dispatch(usersFetchSuccess(users));
  }
}
