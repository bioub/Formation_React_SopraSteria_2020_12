// avec React 16 il faut importer React
// pour faire du JSX
// import React, { Component } from "react";

import { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        format: 'HH:mm:ss',
        delay: 1000,
      },
      now: new Date(),
    };
    setInterval(() => {
      // Erreur : state is not mutable
      // this.state.now = new Date();

      // Passer par la création d'un nouveau state (immuable/immutable)
      // il faudrait plutôt dire mergeShallowState / assignState (Object.assign)
      this.setState({
        options: {
          ...this.state.options, // à vous de gérer les seconds niveaux et plus
          delay: 2000,
        },
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    const { now, options } = this.state;

    // this.props pour accéder aux props
    // const { format } = this.props;

    return <div className="Clock">{now.toLocaleTimeString()} {JSON.stringify(options)}</div>
  }
}

export default Clock;

// imrc ->
// import React, { Component } from 'react';

// cc ->
// class Clock extends Component {
//   state = {  }
//   render() {
//     return (  );
//   }
// }

// export default Clock;
