import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Home from './modules/Home'

import FeedWordMonster from './modules/projects/FeedWordMonster'
import StubmunkSentence from './modules/projects/StubmunkSentence'


//import 'react-mdl/extra/material.css'; //Now using Google's MDL because I don't want to use React Layout for now
import 'react-mdl/extra/material.js';

render((
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
    	<IndexRoute component={Home}/>
     	<Route path="/feedwordmonster" component={FeedWordMonster}/>
     	<Route path="/stubmunksentence" component={StubmunkSentence}/>
   	</Route>
  </Router>
), document.getElementById('app'))