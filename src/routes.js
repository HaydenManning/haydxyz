import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import NewShortUrl from "./components/UrlShortener/NewShortUrl/NewShortUrl";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/new" component={NewShortUrl} />
  </Switch>
);
