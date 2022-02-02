import React, { Fragment } from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import Cookies from "js-cookie";
export const HOST = process.env.REACT_APP_HOST;

let _csrfToken = null;
async function getCsrfToken() {
  if (_csrfToken === null) {
    const response = await fetch(HOST + "/csrf/", {
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
