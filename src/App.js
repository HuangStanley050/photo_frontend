import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navigation/navigation";
import { Route, Switch, withRouter } from "react-router-dom";
import AuthForm from "./components/form/auth";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/register"
            render={props => (
              <AuthForm {...props} isLogin={false} isRegister={true} />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <AuthForm {...props} isLogin={true} isRegister={false} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
