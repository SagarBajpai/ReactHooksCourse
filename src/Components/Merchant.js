import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StateContext, DispatchContext } from "../store/Context";

const CounterOnceAgain = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  const { merchant } = state;

  useEffect(() => {
    if (merchant.name !== "Bikaner Shop") {
      history.push("/customer");
    }
  }, [merchant.name]);

  const handleNameChange = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: "Haldiram Shop",
    });
  };
  return (
    <div>
      <div>{merchant.name}</div>
      <button onClick={handleNameChange}>{"Change Name"}</button>
    </div>
  );
};

export default CounterOnceAgain;
