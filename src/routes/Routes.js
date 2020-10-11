import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import NewUserForm from "../components/user/NewUserForm";
import UserLoginForm from "../components/user/UserLoginForm";
import UsersOverview from "../components/user/UsersOverview";
import UserDetail from "../components/user/UserDetail";
import UserEditForm from "../components/user/UserEditForm";
import CompaniesOverview from "../components/companies/CompaniesOverview";
import CompanyDetail from "../components/companies/CompanyDetail";
import JobsOverview from "../components/job/JobsOverview";
import JobDetail from "../components/job/JobDetail";

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
            <Route path="/users/:username/edit">
                <UserEditForm />
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