import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { connect } from "react-redux";
import Navbar from "./components/navigation/navigation";
import { Route, Switch } from "react-router-dom";
import AuthForm from "./components/form/auth";
import Main from "./components/dashboard/main";
import MainShowCase from "./components/showcase/mainshowcase";
import PageNotFound from "./components/notfound/404";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/showcase" component={MainShowCase} />
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
          <Route path="/main" component={Main} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
