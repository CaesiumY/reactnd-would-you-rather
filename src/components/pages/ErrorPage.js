import React from "react";
import { Result } from "antd";

function ErrorPage() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  );
}

export default ErrorPage;
