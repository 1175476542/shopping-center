import React, { Component } from "react";
import {Route,Switch} from "react-router-dom";
import Login from "./containers/login/login.jsx";
import Admin from "./containers/admin/admin.jsx";
import { Button } from "antd";
function App() {
  return (
    <div className="app">
      <Switch>
        <Route path = "/login" component = {Login} />
        <Route path = "/admin" component = {Admin} />
      </Switch>
    </div>
  );
}

export default App;
