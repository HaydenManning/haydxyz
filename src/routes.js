import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import NewShortUrl from "./components/UrlShortener/NewShortUrl/NewShortUrl";
import UrlRedirect from "./components/UrlShortener/UrlRedirect/UrlRedirect";

// short url regex
const url = /[a-zA-Z0-9]{5}/;

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/new" component={NewShortUrl} />
    <Route // THIS ROUTE MUST BE ON BOTTOM
      sensitive
      path="/:shortURL"
      render={({ match }) => {
        if (!/^[a-zA-Z0-9]{5}$/.test(match.params.shortURL)) {
          return <h1>404 Error</h1>;
        }
        return <UrlRedirect />;
      }}
    />
  </Switch>
);
