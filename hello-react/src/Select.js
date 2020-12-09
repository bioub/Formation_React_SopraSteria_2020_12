import styles from './Select.module.scss';

import React, { Component, createRef } from "react";

class Select extends Component {
  hostRef = createRef();

  constructor() {
    super();

    this.state = {
      open: false,
    };
    this.handleSelectedClick = this.handleSelectedClick.bind(this);
  }

  handleSelectedClick() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleItemClick(item) {
    const { onSelected } = this.props;
    this.setState({
      open: false,
    });
    onSelected(item);
  }

  handleDocumentClick = (event) => {
    if (this.hostRef.current.contains(event.target)) {
      return;
    }

    this.setState({
      open: false,
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  render() {
    const { items = [] } = this.props;

    if (!items.length) {
      throw new Error("items est obligatoire");
    }

    const { selected = items[0] } = this.props
    const { open } = this.state;

    const itemsJsx = items.map((it) => (
      <div key={it} className={styles.item} data-item={it} onClick={() => this.handleItemClick(it)}>
        {it}
      </div>
    ));

    return (
      <div className={styles.host} ref={this.hostRef}>
        <div className={styles.selected} onClick={this.handleSelectedClick}>{selected}</div>
        {open && <div className={styles.items }>{itemsJsx}</div>}
      </div>
    );
  }
}

export default Select;
