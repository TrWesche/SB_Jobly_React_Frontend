import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import NewUserForm from "../components/user/NewUserForm";
import UserLoginForm from "../components/user/UserLoginForm";

function Routes() {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <UserLoginForm />
            </Route>
            <Route exact path="/register">
                <NewUserForm />
            </Route>
            <Route exact path="/users">
                <UsersOverview />
            </Route>
            <Route path="/users/:username">
                <UserDetail />
            </Route>
            <Route exact path="/companies">
                <CompaniesOverview />
            </Route>
            <Route path="/companies/:companyID">
                <CompanyDetail />
            </Route>
            <Route exact path="/jobs">
                <JobsOverview />
            </Route>
            <Route path="/jobs/:jobID">
                <JobDetail />
            </Route>
        </Switch>
    )
}

export default Routes;