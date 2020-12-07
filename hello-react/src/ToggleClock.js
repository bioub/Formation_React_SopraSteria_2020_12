import React, { Component } from "react";
import Clock from "./Clock";
// import ExMultiStateButton from "./ExMultiStateButton";

// class ToggleClock extends Component {
//   state = {
//     show: true,
//   };
//   handleClick = () => {
//     const { show } = this.state;
//     this.setState({
//       show: !show,
//     });
//   };
//   render() {
//     const { show } = this.state;

//     let btnText;

//     if (show) {
//       btnText = <span>Off</span>;
//     } else {
//       btnText = <span>On</span>;
//     }

//     let clockJsx;

//     if (show) {
//       clockJsx = <Clock />;
//     }

//     return (
//       <div className="ToggleClock">
//         <button onClick={this.handleClick}>{btnText}</button>
//         {/* <ExMultiStateButton value={['Off', 'On'] } /> */}
//         {clockJsx}
//       </div>
//     );
//   }
// }

class ToggleClock extends Component {
  state = {
    show: true,
  };
  handleClick = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  };
  render() {
    const { show } = this.state;

    return (
      <div className="ToggleClock">
        <button onClick={this.handleClick}>
          {show ? (
            <span className="off">Off</span>
          ) : (
            <span className="on">On</span>
          )}
        </button>
        {show && <Clock />}
      </div>
    );
  }
}

export default ToggleClock;
