import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPass from './components/ForgotPass';
import Details from './components/Details';
import UserList from './components/UserList';
import Dashboard from './components/Dashboard';

const BaseRouter = ()=>{
    return(
    <div>   
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/forgot-pass" component={ForgotPass}/>            
            <Route exact path="/details" component={Dashboard}/>            
            <Route exact path="/user-list" component={Dashboard}/>            

    </div>)
}

export default BaseRouter