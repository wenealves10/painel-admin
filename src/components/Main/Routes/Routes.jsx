/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import PrivateRoutes from '../../Auth/PrivateRoutes';

import Home from '../../Home/Home';
import Login from '../../Login/Login';
import UserCrud from '../../Users/Users';

export default props => (
    <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoutes exact path="/" component={Home} />
        <PrivateRoutes path="/users" component={UserCrud}/>
        <Redirect from="*" to={Home} />
    </Switch>
)