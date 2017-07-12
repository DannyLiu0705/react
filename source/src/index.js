import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Find from './components/Find';
import Me from './components/Me';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory
} from 'react-router';
require('styles/Init.css');
require('fonts/iconfont.css');
require('styles/App.css');
// Render the main component into the dom
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>		
			<Route path="home" component={Home} />
			<Route path="about" component={About} />
			<Route path="find" component={Find} />
			<Route path="me" component={Me} />
		</Route>
	</Router>
), document.getElementById('app'));
