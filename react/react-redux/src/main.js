'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-dom').BrowserRouter;
var Routes = require('./routes');
var App = require('./app');

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('app')
);
