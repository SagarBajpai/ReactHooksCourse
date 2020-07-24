import React, { useContext } from "react";
import { StateContext } from "../store/Context";

const Customer = () => {
  const state = useContext(StateContext);
  return <div>I'm a Customer with {state.merchant.name} </div>;
};

export default Customer;
