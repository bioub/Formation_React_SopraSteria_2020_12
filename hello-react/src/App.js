import React from 'react';
import Clock from './Clock';
import Parent from './ControlledComponents/Parent';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import LoginForm from './LoginForm';
import MultiButton from './MultiButton';
import Select from './Select';
import ToggleClock from './ToggleClock';

function App() {
  // React.createElement(Hello, {prenom: 'Romain, age:35})

  return (
    <div className="App">
      <Hello prenom="Romain" age={35} />
      <Hello prenom="Jean" age={60} />
      {/* <Clock delay={3000}/> */}
      <Counter />
      <Counter />

      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />

      <ToggleClock />
      <MultiButton values={['Rouge', 'Orange', 'Bleu']}  />

      <Select items={['Rouge', 'Orange', 'Bleu']} />

      <LoginForm />

      <Parent />
    </div>
  );
}

export default App;
