import React, { useState, useContext, useReducer } from "react";
import { AppContext } from "../App";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREASE_COUNT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const CounterOnceAgain = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = useContext(AppContext); // Use Hooks if you wants to avoid wrapping your component

  return (
    <div>
      <div>{state.count}</div>
      <button
        onClick={() =>
          dispatch({
            type: "INCREASE_COUNT",
          })
        }
      >
        {"Increase"}
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREASE_COUNT",
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
