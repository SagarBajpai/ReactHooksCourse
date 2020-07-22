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
