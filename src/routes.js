import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Queue from './Body/Queue';
import Completed from './Body/Completed';
import Search from './Body/Search/Search';

export default (
    <Switch>
        <Route path='/completed' component={Completed}/>
        <Route path='/search' component={Search}/>
        <Route exact path='/' component={Queue}/>
    </Switch>
)