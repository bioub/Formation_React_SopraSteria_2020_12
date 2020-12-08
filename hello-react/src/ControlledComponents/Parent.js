import React, { useState } from "react";
import Counter from "./Counter";

// class Parent extends Component {
//   state = { cpt: 10 };
//   handleIncrement = (newValue) => {
//     this.setState({
//       cpt: newValue,
//     });
//   }
//   render() {
//     const { cpt } = this.state;
//     return (
//       <div className="Parent">
//         <h2>Exemple de composant Count controllé</h2>
//         <Counter count={cpt} onIncrement={this.handleIncrement} />
//         <Counter count={cpt} onIncrement={this.handleIncrement} />
//       </div>
//     );
//   }
// }


function Parent() {
  const [cpt, setCpt] = useState(10);

  function handleIncrement(newValue) {
    setCpt(newValue);
  }

  return (
    <div className="Parent">
      <h2>Exemple de composant Count controllé</h2>
      <Counter count={cpt} onIncrement={handleIncrement} />
      <Counter count={cpt} onIncrement={handleIncrement} />
    </div>
  );
}

export default Parent;
