const coords = {
  x: 1,
  y: 2,
};

// // const coordsX = coords.x;
// // const coordsY = coords.y;
// //    { x: 1      , y: 2       }
// const { x: coordsX, y: coordsY } = coords;

// console.log('coordsX', coordsX);
// console.log('coordsY', coordsY);

// const x = coords.x;
// const y = coords.y;
//    { x: 1, y: 2 }
// const { x: x, y: y } = coords;

// + Shorthand Property (ES2015)
// const { x, y } = coords;

// console.log('x', x);
// console.log('y', y);

// + Default Params (ES2015)
const { x = 0, y = 0, z = 0 } = coords;

console.log('x', x); // 1
console.log('y', y); // 2
console.log('z', z); // 0
