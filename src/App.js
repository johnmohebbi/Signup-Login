import React from "react";
import { Route,Switch,Redirect } from "react-router";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect from="/" to="signup" />
      </Switch>
    </div>
  );
};

export default App;
