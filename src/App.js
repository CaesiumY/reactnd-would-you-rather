import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "./components/pages/LoginPage";
import MyLayout from "./components/layout/MyLayout";

function App(props) {
  console.log(props);
  return (
    <HashRouter>
      <div className="App">
        <MyLayout>
          {props.authedUser ? (
            <p>hi</p>
          ) : (
            <Route path="/" component={LoginPage} />
          )}
        </MyLayout>
      </div>
    </HashRouter>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
