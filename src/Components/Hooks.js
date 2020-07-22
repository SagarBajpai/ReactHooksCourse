import React, { useState } from "react";
import Modal from "./uiLib/Modal1";

const CounterOnceAgain = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Lets Count</button>
      <Modal />
    </div>
  );
};

export default CounterOnceAgain;
