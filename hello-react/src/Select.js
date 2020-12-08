import styles from './Select.module.scss';

import React, { Component } from "react";

class Select extends Component {
  constructor({ items = [] }) {
    super();
    if (!items.length) {
      throw new Error("items est obligatoire");
    }
    this.state = {
      selected: items[0],
      open: false,
    };
    this.handleSelectedClick = this.handleSelectedClick.bind(this);
    // this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleSelectedClick() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  // handleItemClick(event) {
  //   this.setState({
  //     open: false,
  //     selected: event.target.dataset.item,
  //   });
  // }

  handleItemClick(item) {
    this.setState({
      open: false,
      selected: item,
    });
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
    const { selected, open } = this.state;
    const { items = [] } = this.props;

    // const itemsJsx = items.map((it) => (
    //   <div key={it} className="item" data-item={it} onClick={this.handleItemClick}>
    //     {it}
    //   </div>
    // ));

    const itemsJsx = items.map((it) => (
      <div key={it} className={styles.item} data-item={it} onClick={() => this.handleItemClick(it)}>
        {it}
      </div>
    ));

    return (
      <div className={styles.host}>
        <div className={styles.selected} onClick={this.handleSelectedClick}>{selected}</div>
        {open && <div className={styles.items }>{itemsJsx}</div>}
      </div>
    );
  }
}

export default Select;
