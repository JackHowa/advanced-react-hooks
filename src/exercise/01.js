import * as React from 'react'

function counterReducer(prevState, newState) {
  return ({count: newState.count});
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(counterReducer, {count: initialCount})
  const { count } = state;

  const increment = () => setState({ count: count + step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
