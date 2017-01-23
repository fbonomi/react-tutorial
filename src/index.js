import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Info from './pages/Info/Info';
import Users from './pages/Users/Users';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Navigation from './core/Navigation';

// Simulo la login
Navigation.login('urlgi', 1, { userLogin: 'User42', password: 'a', termID: '' }, () => {
	ReactDOM.render(
	    <Router history={hashHistory}>
	        <Route path="/" component={Home}/>
	        <Route path="/about" component={About}/>
	        <Route path="/info" component={Info}/>
	        <Route path="/users" component={Users}/>
	    </Router>,
	  document.getElementById('root')
	);
});