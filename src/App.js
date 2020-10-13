import './App.css';

import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

import JoblyNavBar from "./components/NavBar";
import { AuthContext } from "./components/AuthContext";
import apiJobly from "./utils/apiJobly";
import { decode } from 'jsonwebtoken';

import Home from "./components/Home";
import FormContainer from "./components/FormContainer";
import NewUserForm from "./components/user/NewUserForm";
import UserLoginForm from "./components/user/UserLoginForm";
import UsersOverview from "./components/user/UsersOverview";
import UserDetail from "./components/user/UserDetail";
import UserEditForm from "./components/user/UserEditForm";
import CompaniesOverview from "./components/companies/CompaniesOverview";
import CompanyDetail from "./components/companies/CompanyDetail";
import JobsOverview from "./components/job/JobsOverview";
import JobDetail from "./components/job/JobDetail";


function App() {
    const existingToken = localStorage.getItem("token");
    const [authToken, setAuthToken] = useState(existingToken);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        async function getUserDetails() {
            if(authToken) {
                const tokenVals = decode(authToken);
                let userInformation = await apiJobly.getUserDetails(tokenVals.username);
                setCurrentUser(userInformation);
            }
        }
        getUserDetails();

        return function cleanup() {
            setCurrentUser(null);
        }
    }, [authToken])

    const setToken = (data) => {
        localStorage.setItem("token", data);
        setAuthToken(data);
    }

    const clearToken = () => {
        localStorage.removeItem("token");
        setAuthToken(null);
    }

    return (
        <div className="App">
        <AuthContext.Provider value={{authToken, setAuthToken: setToken, clearAuthToken: clearToken }}>
            <JoblyNavBar currentUser={currentUser} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <FormContainer className="login-form" title="Login" BodyRender={UserLoginForm} />
                </Route>
                <Route exact path="/register">
                    <NewUserForm />
                </Route>
                <PrivateRoute exact path="/users">
                    <UsersOverview />
                </PrivateRoute>
                <PrivateRoute path="/users/:username/edit">
                    <UserEditForm />
                </PrivateRoute>
                <PrivateRoute path="/users/:username">
                    <UserDetail />
                </PrivateRoute>
                <PrivateRoute exact path="/companies">
                    <CompaniesOverview />
                </PrivateRoute>
                <PrivateRoute path="/companies/:companyID">
                    <CompanyDetail />
                </PrivateRoute>
                <PrivateRoute exact path="/jobs">
                    <JobsOverview />
                </PrivateRoute>
                <PrivateRoute path="/jobs/:jobID">
                    <JobDetail />
                </PrivateRoute>
            </Switch>
        </AuthContext.Provider>
        </div>
    );
}

export default App;
