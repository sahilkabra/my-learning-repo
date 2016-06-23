var React = require('react');
var ReactRouter = require('react-router');

var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		console.log('getInitialState');
		return {
			isLoading: true,
			playersInfo: []
		};
	},
	componentWillMount: function() {
		console.log('componentWillMount');
	},
	componentDidMount: function() {
		console.log('componentDidMount');
		let {playerOne, playerTwo} = this.props.location.query;
		//fetching data from github
		githubHelpers.getPlayersInfo([playerOne, playerTwo])
			.then(function(players) {
				this.setState({
					isLoading: false,
					playersInfo: [].concat(players)
				});
			}
			.bind(this))
		;
	},
	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps');
	},
	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},
	handleInitiateBattle: function() {
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		});
	},
	render: function() {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
				onInitiateBattle={this.handleInitiateBattle}
				playersInfo={this.state.playersInfo} />
		);
	}
});

module.exports = ConfirmBattleContainer;
