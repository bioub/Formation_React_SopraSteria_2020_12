// import { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // pour accéder à this dans handleClick
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(event) {
//     console.log(event.target.className); // Counter
//     console.log(event.target.innerText); // contenu du bouton
//     console.log(event.target.value); // valeur du champ

//     const { count, onIncrement = () => {} } = this.props;
//     // remonter la valeur au parent
//     onIncrement(count + 1);
//   }
//   render() {
//     const { count } = this.props;

//     return (
//       <button className="Counter" onClick={this.handleClick}>
//         {count}
//       </button>
//     );
//   }
// }

function Counter({ count, onIncrement = () => {}  }) {
  function handleClick() {
    // remonter la valeur au parent
    onIncrement(count + 1);
  }
  return (
    <button className="Counter" onClick={handleClick}>
      {count}
    </button>
  );
}

export default Counter;
