import React from "react";
import LoginPage from "./components/pages/LoginPage";
import MyLayout from "./components/layout/MyLayout";

function App() {
  return (
    <div className="App">
      <MyLayout>
        <LoginPage></LoginPage>
      </MyLayout>
    </div>
  );
}

export default App;
