import React, { Fragment } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Logout from "./Components/Logout/Logout";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/logout" component={Logout} />  
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}

export default App;
