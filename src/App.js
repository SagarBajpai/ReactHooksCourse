import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CounterWithHook from "./Components/Hooks";
import Index from "./Components/Index";
import Context from "./store/Context";
import Merchant from "./Components/Merchant";
import Customer from "./Components/Customer";

function App() {
  return (
    <Router>
      <Context>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/hook" component={CounterWithHook}></Route>
          <Route exact path="/merchant" component={Merchant}></Route>
          <Route exact path="/customer" component={Customer}></Route>
        </Switch>
      </Context>
    </Router>
  );
}

export default App;

// Lets say we want to pass down the default websiteName color to component tree
// CREATE a context
// Context will return APIs: Provider and Consumer
