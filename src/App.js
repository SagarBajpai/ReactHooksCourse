import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CounterWithClass from "./Components/Classes";
import CounterWithHook from "./Components/Hooks";
import Index from "./Components/Index";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/class" component={CounterWithClass}></Route>
        <Route exact path="/hook" component={CounterWithHook}></Route>
      </Switch>
    </Router>
  );
}

export default App;
