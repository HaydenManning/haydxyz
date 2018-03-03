import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import UrlRedirect from "./components/UrlShortener/UrlRedirect/UrlRedirect";
import Donate from "./components/Donate/Donate";

// short url regex
// const url = /[a-zA-Z0-9]{5}/;

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/i/give" component={Donate} />
    <Route // THIS ROUTE MUST BE ON BOTTOM
      sensitive
      path="/:shortURL"
      render={({ match }) => {
        if (!/^[a-zA-Z0-9]{3-8}$/.test(match.params.shortURL)) {
          return <h1>404 Error</h1>;
        }
        return <UrlRedirect />;
      }}
    />
  </Switch>
);
