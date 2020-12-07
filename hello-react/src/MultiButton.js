import React, { Component } from "react";

// class MultiButton extends Component {
//   constructor() {
//     super();
//     this.state = {
//       index: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     const { index } = this.state;
//     const { values } = this.props;
//     this.setState({
//       index: (index + 1) % values.length,
//     });
//   }
//   render() {
//     const { index } = this.state;
//     const { values } = this.props;

//     // const buttonsJsx = [];

//     // for (let v of values) {
//     //   buttonsJsx.push(<button>{v}</button>);
//     // }

//     const buttonsJsx = values.map((v, i) => (
//       <button onClick={this.handleClick} disabled={i !== index}>
//         {v}
//       </button>
//     ));

//     return <div className="MultiButton">{buttonsJsx}</div>;
//   }
// }

class MultiButton extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { index } = this.state;
    const { values } = this.props;
    this.setState({
      index: (index + 1) % values.length,
    });
  }
  render() {
    const { index } = this.state;
    const { values } = this.props;

    return (
      <div className="MultiButton">
        {values.map((v, i) => (
          <button key={v} onClick={this.handleClick} disabled={i !== index}>
            {v}
          </button>
        ))}
      </div>
    );
  }
}

export default MultiButton;
