import React, { Fragment } from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import Cookies from "js-cookie";

let _csrfToken = null;
async function getCsrfToken() {
  if (_csrfToken === null) {
    const response = await fetch("http://127.0.0.1:8000/csrf/", {
      credentials: "include",
    });
    const data = await response.json();
    _csrfToken = data.csrfToken;
  }
  return _csrfToken;
}
getCsrfToken().then((val) => Cookies.set("csrftoken", val, { path: "/" }));

function App() {
  return (
    <Fragment>
      <Router />
    </Fragment>
  );
}

export default App;
