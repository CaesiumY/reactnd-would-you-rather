import React from "react";
import { HashRouter, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import MyLayout from "./components/layout/MyLayout";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <MyLayout>
          <Route path="/" component={LoginPage} />
        </MyLayout>
      </div>
    </HashRouter>
  );
}

export default App;
