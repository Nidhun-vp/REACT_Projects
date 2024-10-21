import React from 'react'
import Button from 'react-bootstrap/Button';

function EventS_React() {
    function sayHello()
    {
        alert('hello')
    }
    /*events*/ 
  return (
     <>
     {/* for 2 line div or fragment is mandatory */}
   
    <button onClick={sayHello} >click me</button>
    <Button variant="primary" onDoubleClick={sayHello}>Primary</Button>{' '}
    </>
  )
}

export default EventS_React
