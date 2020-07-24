import React, { useState, useContext } from "react";
import { StateContext, DispatchContext } from "../store/Context";

const CounterOnceAgain = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const { merchant } = state;

  console.log("state : ", merchant);
  return (
    <div>
      <div>{merchant.name}</div>
      <button
        onClick={() =>
          dispatch({
            type: "CHANGE_NAME",
            payload: "Haldiram Shop",
          })
        }
      >
        {"Change Name"}
      </button>
    </div>
  );
};

export default CounterOnceAgain;
