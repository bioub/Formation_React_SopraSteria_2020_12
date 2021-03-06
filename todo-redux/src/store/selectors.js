import { createSelector } from "@reduxjs/toolkit";

export function newTodoSelector(state) {
  return state.todos.newTodo;
}

// export function todosSelector(state) {
//   // simuler un traitement lourd (durée 1s)
//   const debut = Date.now();
//   while (debut + 1000 > Date.now());

//   return state.todos;
// }

export const todosSelector = createSelector(
  (state) => state.todos.items,
  (items) => {
    // simuler un traitement lourd (durée 1s)
    // const debut = Date.now();
    // while (debut + 1000 > Date.now());

    return items;
  }
);

export function usersSelector(state) {
  return state.users;
}
