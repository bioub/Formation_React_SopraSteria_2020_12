const redux = require("redux");

const initialState = {
  cpt: 10,
  newTodo: '',
};

// fonction qui renvoit la prochaine la valeur du
// state en fonction de l'action
// const nextState = reducer(state, action);

// reducer doit etre pure :
// - prédictive, appelée avec des mêmes paramètres
// elle retourne le même résultats
// exemple de fonction prédictive : addition(1, 2) => 3
// exemple de fonction non-prédictive : Math.random() => ???
// - elle ne doit pas avoir de side-effect : log, requete ajax, appel à une fonction externe
// - ne modifie pas ses paramètres
function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        cpt: state.cpt + (action.payload ?? 1),
      };
    case "decrement":
      return {
        ...state,
        cpt: state.cpt - 1,
      };
    default:
      return state;
  }
}

/** @type {import('redux').Store)} */
const store = redux.createStore(reducer);

// console.log('state', store.getState());

// document.addEventListener('click', () => {});
store.subscribe(() => {
  console.log("state", store.getState());
});

// document.dispatchEvent(new Event('click'));
store.dispatch({ type: "increment", payload: 2 });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "unknown" });

// composant/dispatch(action) -> reducer -> state -> subscribe/composant
