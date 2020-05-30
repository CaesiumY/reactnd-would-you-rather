import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import LeaderBoard from "./components/pages/LeaderBoard";
import NewQuestion from "./components/pages/NewQuestion";
import MyLayout from "./components/layout/MyLayout";
import NavBar from "./components/NavBar";
import PollDetail from "./components/pages/PollDetail";
import ErrorPage from "./components/pages/ErrorPage";

function App(props) {
  return (
    <HashRouter>
      <div className="App">
        <LoadingBar style={{ backgroundColor: "skyblue", height: "5px" }} />
        <MyLayout>
          {props.authedUser ? (
            <>
              <NavBar />
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/questions/invalid_id" component={ErrorPage} />
                <Route path="/questions/:question_id" component={PollDetail} />
                <Route component={ErrorPage} />
              </Switch>
            </>
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
