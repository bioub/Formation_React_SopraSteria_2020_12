import { DECREMENT, INCREMENT } from "./constants";

const initialState = {
  cpt: 0,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        cpt: state.cpt + 1,
      };
    case DECREMENT:
      return {
        cpt: state.cpt - 1,
      };
    default:
      return state;
  }
}
