var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return( 
      /* jshint ignore:start */
      <div> Hello {this.props.name}. You are {this.props.age} today </div>
      /* jshint ignore:end */
    )
  }
});

/*
 * Focussed
 * Independant
 * Reusable
 * Small
 * Testable
 */

var ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={"https://www.github.com/" + this.props.username}> {this.props.username} </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
        <div>{this.props.name}</div>
    );
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
       <ProfilePic imageUrl={this.props.user.image} /> 
       <ProfileName name={this.props.user.name} />
       <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

var USER_DATA = {
  name: "Sahil Kabra",
  username: "sahilkabra",
  image: "img.jpg"
};

ReactDOM.render( 
  //<HelloWorld name="Sahil" age="32"/>, 
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
