import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import News from './components/News/News';
import Navbar from './components/NavBar/Navbar';
import Admin from './components/Admin/Admin';

export default (
    <Switch>
        <Route exact path='/'  component={Home}/>
        <Route path='/News' exact component={News}/>
        <Route path='/Reviews' exact component={Reviews}/>
        <Route path='/NavBar' exact component={Navbar}/>
        <Route path='/Admin' exact component={Admin}/>

    </Switch>
)