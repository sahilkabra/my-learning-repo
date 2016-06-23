var axios = require('axios');

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
	getPlayersInfo: function(players) {
		return axios.all(players.map(getUserInfo))
			.then(function(info) {
				return info.map(function(userRes) {
					return userRes.data;
				});
			})
			.catch(function(e) {
				console.log(e);
			})
		;
	}
};

module.exports = helpers;
