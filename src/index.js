import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Navigation from './components/Navigation/Navigation';

import App from './pages/App/App';
import About from './pages/About/About';
import Info from './pages/Info/Info';

ReactDOM.render(
    <div>
        <Navigation />
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/info" component={Info}/>
        </Router>
    </div>,
  document.getElementById('root')
);
