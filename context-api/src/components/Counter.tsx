import React from 'react';
import { useCounter } from '../contexts/CounterContext';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const Counter: React.FC = () => {
  const { state, dispatch } = useCounter();

  const handleIncrement = () => dispatch({ type: 'INCREMENT' });
  const handleDecrement = () => dispatch({ type: 'DECREMENT' });
  const handleReset = () => dispatch({ type: 'RESET' });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default Counter;
