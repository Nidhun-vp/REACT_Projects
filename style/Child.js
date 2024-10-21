import React from 'react'

function Child(props) {
    const {name,color,petals}=props.flower;
  return (
    <div>
      <h2>Chhild component</h2>
      <p>Flower name:{name}</p>
      <p>color:{color}</p>
      <p>Number of petals:{petals}</p>
    </div>
  );
}

export default Child
