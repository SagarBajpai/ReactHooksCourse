import React, { useState, useContext } from "react";
import { AppContext } from "../App";

const CounterOnceAgain = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  //const data = useContext(AppContext); // Use Hooks if you wants to avoid wrapping your component

  return (
    <AppContext.Consumer>
      {(props) => {
        return (
          <div>
            {count}
            <button onClick={() => setCount((count) => count + 1)}>
              {props.name}
            </button>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default CounterOnceAgain;
