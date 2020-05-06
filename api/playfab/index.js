//import { PlayFab, PlayFabServer } from 'playfab-sdk';
var pf = require('playfab-sdk');

function getKey() {
	return process.env['VUE_APP_PLAYFAB_SECRET_KEY'];
}

function leaderboardCallback(error, result, context) {
	if (result !== null) {
		let leaderboard = result.data.Leaderboard;
		console.log(leaderboard);
		context.res = { body: leaderboard };
	} else if (error !== null) {
		console.log(error.errorMessage);
	}
}

module.exports = async function () {
	let playfab_key = await getKey();
	console.log(playfab_key);
	var leaderboardRequest = {
		ProfileConstraints: {
			ShowDisplayName: true,
			ShowLinkedAccounts: true,
			ShowContactEmailAddresses: true,
		},
		MaxResultsCount: 100,
		StartPosition: 0,
		StatisticName: 'score',
	};
	pf.PlayFabServer.settings.titleId = '266B3';
	pf.PlayFab.settings.developerSecretKey = playfab_key;
	pf.PlayFabServer.GetLeaderboard(leaderboardRequest, leaderboardCallback);
};
