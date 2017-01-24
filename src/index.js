/*
 Import Dependencies
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
import 'babel-polyfill';

/*
 Import Components
 */
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Info from './pages/Info/Info';
import Users from './pages/Users/Users';

import Auth from './components/Auth';
import Login from './components/Login';

/* Import CSS */
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import css from  './styles/style.css';

/* Import our data store */
import store, { history } from './store';

/*
 Error Logging
 */

// import Raven from 'raven-js';
// import { sentry_url } from './data/config';
// if(window) {
//   Raven.config(sentry_url).install();
// }

/*
 Rendering
 This is where we hook up the Store with our actual component and the router
 */
render(
	<Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/about" component={About}></Route>
				<Route path="/info" component={Info}></Route>
				<Route path="/users" component={Users}></Route>
				<Route path="/photo_grid" component={PhotoGrid}></Route>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
			<Route path="/auth" component={Auth}>
				<Route path="login" component={Login}></Route>
			</Route>
		</Router>
	</Provider>,
    document.getElementById('root')
);