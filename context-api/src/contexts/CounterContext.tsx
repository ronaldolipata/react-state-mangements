import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import {
  counterReducer,
  CounterAction,
  CounterState,
} from '../reducers/counterReducer';

type ContextProps = {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
};

type CounterContextProviderProps = {
  children: React.ReactNode;
};

const initialState: CounterState = {
  count: 0,
};

const CounterContext = createContext<ContextProps | undefined>(undefined);

const CounterProvider: React.FC<CounterContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

export { CounterProvider, useCounter };
