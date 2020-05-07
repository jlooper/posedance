const { PlayFab, PlayFabServer } = require('playfab-sdk');

function getKey() {
	return process.env['VUE_APP_PLAYFAB_SECRET_KEY'];
}

module.exports = function (context) {
	let playfab_key = getKey();
	var leaderboardRequest = {
		ProfileConstraints: {
			ShowDisplayName: true,
			ShowLinkedAccounts: true,
			ShowContactEmailAddresses: false,
		},
		MaxResultsCount: 100,
		StartPosition: 0,
		StatisticName: 'score',
	};
	PlayFabServer.settings.titleId = '266B3';
	PlayFab.settings.developerSecretKey = playfab_key;
	PlayFabServer.GetLeaderboard(leaderboardRequest, function (error, result) {
		console.log(JSON.stringify(result.data.Leaderboard));
		context.res = { body: result.data.Leaderboard };
		context.done();
	});
};
