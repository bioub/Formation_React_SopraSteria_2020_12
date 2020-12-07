// import React from "react";

// function Hello() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';
//   divEl.innerText = 'Hello Romain !!!';

//   document.body.appendChild(divEl);

//   return '';
// }

// function Hello() {
//   return React.createElement(
//     "div",
//     { className: "Hello" },
//     "Hello ",
//     React.createElement("span", { id: "prenom" }, "Romain"),
//     " !!!"
//   );
// }

// passer des paramètres à un composant React
// -> props
function Hello({ prenom = '', age = 0 }) {
  return (
    <div className="Hello">
      Hello my name is {prenom} I'm {age} !!!
    </div>
  );
}

export default Hello;
