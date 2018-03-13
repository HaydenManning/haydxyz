import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import UrlRedirect from "./components/UrlRedirect/UrlRedirect";
import Donate from "./pages/Donate";
import UserSettings from "./pages/UserSettings";
import Login from "./pages/Login";
import TermsOfService from "./pages/TermsOfService";
import Stats from "./pages/Stats";
import Four04 from "./pages/Four04";

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/u/login" component={Login} />
    <Route path="/i/tos" component={TermsOfService} />
    <Route path="/i/give" component={Donate} />
    <Route path="/u/settings" component={UserSettings} />
    <Route path="/s/:id" component={Stats} />
    <Route // THIS ROUTE MUST BE ON BOTTOM
      sensitive
      path="/:shortURL"
      render={({ match }) => {
        if (!/^[a-zA-Z0-9]{3-8}$/.test(match.params.shortURL)) {
          return <Four04 />;
        }
        return <UrlRedirect />;
      }}
    />
  </Switch>
);
