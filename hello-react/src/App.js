import React from 'react';
import Clock from './Clock';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import MultiButton from './MultiButton';
import Select from './Select';
import ToggleClock from './ToggleClock';

function App() {
  // React.createElement(Hello, {prenom: 'Romain})

  return (
    <div className="App">
      <Hello prenom="Romain" age={35} />
      <Hello prenom="Jean" age={60} />
      <Clock />
      <Counter />
      <Counter />

      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />

      <ToggleClock />
      <MultiButton values={['Rouge', 'Orange', 'Bleu']}  />

      <Select items={['Rouge', 'Orange', 'Bleu']} />
    </div>
  );
}

export default App;
