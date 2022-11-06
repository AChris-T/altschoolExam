import React, { useReducer } from "react"
import "./home.css"

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increament':
      return state + 1
    case 'decreament':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="home"> 
      <h2 className="hometxt">Count:</h2>
      <h2 className="subCount">{count}</h2>
      <div className="btn">
        <button  className="smallbtn" onClick={() => dispatch('increament')} >Increament</button>
        <button className="smallbtn" onClick={() => dispatch('decreament')}>Decreament</button>
        <button className="smallbtn" onClick={() => dispatch('reset')}>Reset</button>
      </div>
    </div>
  )
}
export default Counter