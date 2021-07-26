import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";

import history from "./utils/history";
import { getConfig } from "./config";

const onRedirectCallback = (appState) => {
    console.log("Redirect: ", appState)
    history.push(
        appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();
console.log("Variable de config.js: ", config)

const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    ...(config.audience ? { audience: config.audience } : null),
    redirectUri: window.location.origin + "/dashboard",
    onRedirectCallback,
    useRefreshTokens: true,
    cacheLocation:"localstorage"
};

console.log("Print providerConfig", providerConfig)
ReactDOM.render(
    <Auth0Provider {...providerConfig}>
      <React.StrictMode>
      <App />
      </React.StrictMode>
    </Auth0Provider>,
    document.getElementById("root")
  );
  

/*
render(<Auth0Provider
    domain="dev--c34vvj2.us.auth0.com"
    clientId="lWPquc3fnQF57JyZMCJIsbhg2vYabtTX"
    redirectUri={window.location.origin+"/profile"}
    onRedirectCallback
    audience="https://dev--c34vvj2.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>
  , document.getElementById('app'));
*/