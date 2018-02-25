import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import NewShortUrl from "./components/UrlShortener/NewShortUrl/NewShortUrl";
import UrlRedirect from "./components/UrlShortener/UrlRedirect/UrlRedirect";
import UserProfile from "./components/User/UserProfile/UserProfile";
import UserSettings from "./components/User/UserSettings/UserSettings";

// short url regex
// const url = /[a-zA-Z0-9]{5}/;

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/u/:id/settings" component={UserSettings} />
    <Route path="/u/:id" component={UserProfile} />
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
