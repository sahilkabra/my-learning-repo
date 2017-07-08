/* eslint-disable strict */

$ = jQuery = require('jquery');
var React = require('react');
var Header = require('./components/common/header');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');
var Route = require('react-router-dom').Route;

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <Route exact path='/' component={About}/>
                <Route path='/about' component={About}/>
                <Route path='/authors' component={Authors}/>
            </div>
        );
    }
});

module.exports = App;

