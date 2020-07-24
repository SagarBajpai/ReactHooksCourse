import React, { createContext, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CounterWithHook from "./Components/Hooks";
import Index from "./Components/Index";

export const StateContext = createContext(); //Creating a context to pass. can be anything object, string!
export const DispatchContext = createContext();

let intitialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, intitialState);
  return (
    <Router>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route exact path="/hook" component={CounterWithHook}></Route>
          </Switch>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </Router>
  );
}

export default App;

// Lets say we want to pass down the default websiteName color to component tree
// CREATE a context
// Context will return APIs: Provider and Consumer
