import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { AuthStoreProvider } from "../modules/Auth/store";
import MainPage from "../modules/Auth";
import Profile from "../modules/UserMgmt";
import SignUp from "../modules/ProfileMgmt";
import Login from "../modules/admin";
import { subscribeErrorsToToaster } from "../modules/ErrorHandler";
import { LeavePageConfirmation } from "../components/LeavePageConfirmation";

subscribeErrorsToToaster();
export default function Routes() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter
      getUserConfirmation={(message, callback) =>
        LeavePageConfirmation(message, callback)
      }
    >
      <AuthStoreProvider>
        <Switch>
          <Route path="/mainpage" component={MainPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Redirect from={`/`} to={token ? `/mainpage` : `/login`}
          />
        </Switch>
      </AuthStoreProvider>
    </BrowserRouter>
  );
}
