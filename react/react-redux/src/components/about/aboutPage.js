'use strict';

var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p> This Application uses:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
