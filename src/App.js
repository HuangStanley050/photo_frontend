import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Navbar from "./components/navigation/navigation";
import { Route, Switch, withRouter } from "react-router-dom";
import AuthForm from "./components/form/auth";
import Main from "./components/dashboard/main";

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
          <Route path="/main" component={Main} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     auth: state.auth,
//     file: state.file,
//     error: state.error
//   };
// };

// export default withRouter(connect(mapStateToProps)(App));

export default App;
