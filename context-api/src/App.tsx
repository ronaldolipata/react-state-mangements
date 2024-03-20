import React from 'react';
import Counter from './components/Counter';
import { CounterProvider } from './contexts/CounterContext';

const App: React.FC = () => {
  return (
    <CounterProvider>
      <div>
        <h1>State Management using Context API</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default App;
