import React, { createContext, useReducer } from "react";
import { merchantState, merchantReducer } from "./reducers/merchant";
import { customerState, customerReducer } from "./reducers/customer";

export const StateContext = createContext();
export const DispatchContext = createContext();

const hooksCombinedReducer = (combinedReducers) => {
  const state = {};
  Object.keys(combinedReducers).forEach((key) => {
    Object.assign(state, {
      [key]: combinedReducers[key][0],
    });
  });

  // Global Dispatch Function
  const dispatch = (action) =>
    Object.keys(combinedReducers)
      .map((key) => combinedReducers[key][1])
      .forEach((fn) => fn(action));
  return [state, dispatch];
};

const Context = (props) => {
  const storeStr = (localStorage || {}).store;
  const store = storeStr ? JSON.parse(storeStr) : {};
  const { merchant } = store;

  const [state, dispatch] = hooksCombinedReducer({
    merchant: useReducer(
      merchantReducer,
      merchantState,
      () => merchant || merchantState // reducer intialisation
    ),
    customer: useReducer(customerReducer, customerState),
  });
  localStorage.setItem("store", JSON.stringify(state));
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Context;
