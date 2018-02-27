import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

/* COLOR SCHEME
DARKEST - #2F3637
DARK - #256476
MID - #2F8E70
LIGHT - #E0DBC7
LIGHTEST - #F6F4EE
*/
