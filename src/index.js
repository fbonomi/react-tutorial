import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

//import About from './pages/About/About';
//import Info from './pages/Info/Info';
//import Users from './pages/Users/Users';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { createStore } from 'redux'
import todoApp from './reducers/index'
import App from './pages/App/App';
//import App from './components/App'

let store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
    	<App />
	</Provider>, 
  	document.getElementById('root')
);
