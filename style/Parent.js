import React from 'react'
import Child from './Child';

function Parent() {


    const flower={
        name:'rose',
        color:"red",
        petals:5
    };

    const fruits={
        name:'apple',
        color:"red",
        petals:5
    };
  return (
    <div>
        <h1>Parent Component</h1>
      <Child flower={flower}/>
      <Child flower={fruits}/>
    </div>
  );
}

export default Parent
