import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
    const isAuthorized = useAuth();

    const render = () => {
        if (isAuthorized) {
            return (
                <Route {...rest} render={props => <Component {...props} />} />
            ) 
        } else {
            return (
                <Redirect to="/login" />
            )
        }
    }

    return (render());
}

export default PrivateRoute;