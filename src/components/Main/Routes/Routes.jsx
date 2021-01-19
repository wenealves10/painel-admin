/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {Switch, Route, Redirect} from 'react-router';

import Home from '../../Home/Home';
import UserCrud from '../../Users/Users';

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UserCrud}/>
        <Redirect from="*" to={Home} />
    </Switch>
)