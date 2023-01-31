import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const {Recache} = require('recache-client');

let projectID = 268;
await Recache.init(process.env.RECACHE_SECRET, projectID);

await Recache.logEvent_AutodetectIp("Hello, world!");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
