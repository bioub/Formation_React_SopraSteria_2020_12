import React, { Component } from 'react';

class Select extends Component {
  constructor({items = []}) {
    super();
    if (!items.length) {
      throw new Error('items est obligatoire');
    }
    this.state = {
      selected: items[0],
      open: false,
    };
  }
  render() {
    // Exercice :
    // 1 / Afficher les valeurs :
    //     - selected du state dans <div className="selected">
    //     - items de props dans <div className="items">
    // 2 / Au click de <div className="selected"> passer open à !open
    //     conditionner l'affichage de <div className="items"> à open
    // 3 / Au click de <div className="item">
    //     stocker la valeur dans state selected et passer open à false
    return (
      <div className="Select">
        <div className="selected">TODO afficher la valeur sélectionnée</div>
        <div className="items">
          <div className="item">A</div>
          <div className="item">B</div>
          <div className="item">C</div>
        </div>
      </div>
     );
  }
}

export default Select;
