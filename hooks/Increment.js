import React from 'react'
import { useState } from 'react'

function Increment() {
  
    const[count,setCount]=useState(0)
    function Inc(){
      console.log(count)
      return setCount(count+1)
      
    }

    function Dec(){
      console.log(count)
      return setCount(count-1)
      
    }

    function Rec(){
      console.log(count)
      return setCount(0)//set count =0
      
    }
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Inc}>+</button>
      <button onClick={Dec}>-</button>
      <button onClick={Rec}>reset</button>
    </div>
  )
}

export default Increment
