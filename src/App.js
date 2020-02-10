import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/:userId/places" exact component={UserPlaces} />
          <Route path="/places/new" exact component={NewPlace} />
          <Route path="/places/:placeId" component={UpdatePlace} />
          <Route path="/auth" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
