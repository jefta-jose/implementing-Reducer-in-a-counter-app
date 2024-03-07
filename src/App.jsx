import { useReducer } from 'react'
import './App.css'

function App() {

  const reducerCount = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.payload
      case 'DECREMENT':
        return state - action.payload
      default:
        return state
    }

  }
  const [count, dispatch] = useReducer(reducerCount, 0)

  const incrementCount = () => {
    dispatch({ type: 'INCREMENT', payload: 1 })
  }
  const decreaseCount = () => {
    dispatch({ type: 'DECREMENT', payload: 2 })
  }

  return (
    <>
      <h1>Counter app : UseReducer</h1>
      <div className="card">
        <button onClick={incrementCount}> + </button>
        <span>{count}</span>
        <button onClick={decreaseCount}> - </button>
      </div>

    </>
  )
}

export default App
