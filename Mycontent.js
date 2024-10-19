import React from 'react'

function Mycontent() {
    const mystyle={backgroundColor:"aqua"};
    const mystyle2={backgroundColor:"blue"};
  return (
    <div>
        <p style={mystyle}>This content loaded from mycontent</p>
         <h2 style={mystyle2}>heading content loaded from  mystyle2</h2>
    </div>
  )
}

export default Mycontent
