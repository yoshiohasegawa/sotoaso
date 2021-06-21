import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({component: Component, ...rest}) {
    const userAuthenticated = useSelector(state => state.authentication);

    return (
        <Route {...rest} render={
            (props) => {
                if (userAuthenticated) {
                    return <Component {...props} />
                } 
                else {
                    return (
                        <Redirect to={{
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }} />
                    )
                }
            }
        }/>
    )
}
