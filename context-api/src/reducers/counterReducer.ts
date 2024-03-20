export type CounterState = {
  count: number;
};

export type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

export const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      if (state.count !== 0) {
        return { ...state, count: state.count - 1 };
      }
      return state;
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};
