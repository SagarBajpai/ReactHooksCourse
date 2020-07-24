import React, { useState, useContext } from "react";
import { StateContext, DispatchContext } from "../store/Context";

const CounterOnceAgain = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  //const data = useContext(AppContext); // Use Hooks if you wants to avoid wrapping your component
  console.log("state : ", state);
  return (
    <div>
      <div>{state.count}</div>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
          })
        }
      >
        {"Increase"}
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
          })
        }
      >
        {"Decrease"}
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
};

export default CounterOnceAgain;
