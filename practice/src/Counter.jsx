import React from 'react'
import { useReducer } from 'react'

function reducer(state,action){
    if (action === "increase"){
        return state+1;
    } else if (action === "decrease"){
        return state-1;
    } else{
        return state;
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0)
    function increaseCounter(){
        dispatch("increase")
    }

    function decreaseCounter(){
        dispatch("decrease")
    }
  return (
    <div>
        <button onClick={increaseCounter}>+</button>{count}<button onClick={decreaseCounter}>-</button>
    </div>
  )
}

export default Counter