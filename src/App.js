import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import LoginPage from "./components/pages/LoginPage";
import MyLayout from "./components/layout/MyLayout";

function App(props) {
  console.log(props);
  return (
    <HashRouter>
      <div className="App">
        <LoadingBar style={{ backgroundColor: "skyblue", height: "5px" }} />
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
