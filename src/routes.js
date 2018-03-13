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
    <Route path="/i/about" component={About} />
    <Route path="/i/contact" component={Contact} />
    <Route path="/i/social" component={Social} />
    <Route path="/a/admin" component={Admin} />
    <Route path="/a/dashboard" component={AdminDashboard} />
    <Route path="/a/settings" component={AdminSettings} />
    <Route path="/a/edit" component={AdminEdit} />
    <Route path="/a/usermanagement" component={AdminUserManagement} />
    <Route path="/u/profile" component={UserProfile} />
    <Route path="/u/settings" component={UserSettings} />
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
