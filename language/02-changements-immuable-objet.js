const coords = {
  x: 1,
  y: 2,
};

// changement muable (ajoute une clé)
// met à jour l'objet existant
// coords.z = 3;

// changement immuable (ajoute une clé)
// passer par la création d'un nouveau objet
// ex: setState

// style historique (avant ES2015)
// const newCoords = {};

// for (const key in coords) {
//   newCoords[key] = coords[key];
// }

// newCoords.z = 3;


// ES2015 -> Object.assign
// const newCoords = Object.assign({}, coords, { z: 3 });
// console.log('coords', coords); // {x: 1, y: 2}
// console.log('newCoords', newCoords); // {x: 1, y: 2, z: 3}

// ES2018 -> REST properties
// ... recopier les clés/valeurs d'un autre objet
const newCoords = {...coords, z: 3};
console.log('coords', coords); // {x: 1, y: 2}
console.log('newCoords', newCoords); // {x: 1, y: 2, z: 3}
