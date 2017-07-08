'use strict'

var React = require('react');
var Route = require('react-router-dom').Route;
var Router = require('react-router-dom').BrowserRouter;
var App = require('./app');

var routes = (
  <Router>
    <App/>
  </Router>
);

module.exports = routes;
