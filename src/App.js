import React, { createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CounterWithHook from "./Components/Hooks";
import Index from "./Components/Index";

export const AppContext = createContext(); //Creating a context to pass. can be anything object, string!
const { Provider } = AppContext;

function App() {
  return (
    <Router>
      <Provider value={{ name: "Real Dev Squad" }}>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/hook" component={CounterWithHook}></Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;

// Lets say we want to pass down the default websiteName color to component tree
// CREATE a context
// Context will return APIs: Provider and Consumer
