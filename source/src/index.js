import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Home from './components/Home';
import About from './components/About';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory
} from 'react-router';
require('styles/Init.css');
// Render the main component into the dom
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>		
			<Route path="home" component={Home} />
			<Route path="about" component={About} />
		</Route>
	</Router>
), document.getElementById('app'));
