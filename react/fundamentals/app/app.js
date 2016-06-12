var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return( 
      /* jshint ignore:start */
      <div> Hello React </div>
      /* jshint ignore:end */
    )
  }
});

ReactDOM.render( 
  <HelloWorld />, document.getElementById('app')
);
