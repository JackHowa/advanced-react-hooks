import * as React from 'react'

function counterReducer(previousCount, newCount) {
  return newCount;
}

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(counterReducer, initialCount)

  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
