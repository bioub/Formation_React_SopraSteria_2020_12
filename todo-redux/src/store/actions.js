import { TODO_ADD, TODO_CHANGE } from "./constants";

export function todoChange(payload) {
  return {
    type: TODO_CHANGE,
    payload,
  };
}

export function todoAdd(title) {
  return {
    type: TODO_ADD,
    payload: {
      id: Math.random(),
      title,
      completed: false,
    },
  };
}
