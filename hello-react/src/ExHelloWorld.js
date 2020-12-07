import React, { Component } from "react";

// class ExHelloWorld extends Component {
//   constructor() {
//     super();
//     this.state = {
//       prenom: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       prenom: event.target.value,
//     });
//   }
//   render() {
//     const { prenom } = this.state;
//     return (
//       <div className="ExHelloWorld">
//         <div>
//           Prénom : <input value={prenom} onChange={this.handleChange} />
//         </div>
//         <p>Bonjour {prenom}</p>
//       </div>
//     );
//   }
// }

// Avec les class properties de ESNext
class ExHelloWorld extends Component {
  state = {
    prenom: "",
  };
  handleChange = (event) => {
    this.setState({
      prenom: event.target.value,
    });
  }
  render() {
    const { prenom } = this.state;
    return (
      <div className="ExHelloWorld">
        <div>
          Prénom : <input value={prenom} onChange={this.handleChange} />
        </div>
        <p>Bonjour {prenom}</p>
      </div>
    );
  }
}

export default ExHelloWorld;
