import React, { useState } from "react";

const App = () => {
  /*  Initial State */
  let [Name, setname] = useState('');

  /* The handleChange() function to set a new state for input */
  const handleChange = (event) => {
    setname(event.target.value);
  }

  return (
    /* Short-form of React.Fragement*/
    <>
      <form>
        { /* The handleChange() is triggered when text is entered */}
        <div>
          <h1>My Name is <span style={{ color: 'red' }} >
            {Name}</span></h1>
          <input
            type="text"
            value={Name}
            onChange={handleChange}
            placeholder="Enter a text"
          />
        </div>
      </form>
    </>
  )
}

export default App;