import * as React from 'react'

const INCREMENT = 'INCREMENT';

function counterReducer(prevState, newState) {

  const { type, step } = newState;

  if (type === INCREMENT) {
    return ({count: prevState.count + step});
  }

  return prevState;
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(counterReducer, {count: initialCount})

  const { count } = state; 

  const increment = () => dispatch({ type: INCREMENT, step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
