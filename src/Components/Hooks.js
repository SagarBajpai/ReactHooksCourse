import React, { useState } from "react";

const CounterOnceAgain = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Lets Count</button>
    </div>
  );
};

export default CounterOnceAgain;

//Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

//Benefits
//Can use states in functional component
//Not have to use this keyword anymore
//60% cleaner code
