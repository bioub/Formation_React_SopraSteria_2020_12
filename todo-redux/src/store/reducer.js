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

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TODO_CHANGE:
      return {
        ...state,
        newTodo: action.payload,
      };
    default:
      return state;
  }
}
