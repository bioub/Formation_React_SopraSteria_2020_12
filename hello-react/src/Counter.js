import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // pour accéder à this dans handleClick
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log(event.target.className); // Counter
    console.log(event.target.innerText); // contenu du bouton
    console.log(event.target.value); // valeur du champ
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    const { count } = this.state;

    return (
      <button className="Counter" onClick={this.handleClick}>
        {count}
      </button>
    );
  }
}

export default Counter;
