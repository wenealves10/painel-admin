/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import isAuthentication from './isAuthentication';
import { Route, Redirect} from 'react-router';

export default ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthentication() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/login', state: { from: props.location } }}  />
        )
    )} />
);