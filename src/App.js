import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import LoginPage from "./components/pages/LoginPage";
import MyLayout from "./components/layout/MyLayout";
import NavBar from "./components/NavBar";

function App(props) {
  return (
    <HashRouter>
      <div className="App">
        <LoadingBar style={{ backgroundColor: "skyblue", height: "5px" }} />
        {/* {props.authedUser && <NavBar />} */}
        <MyLayout>
          {props.authedUser ? (
            <NavBar />
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
