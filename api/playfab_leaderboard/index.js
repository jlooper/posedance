const { PlayFab, PlayFabServer } = require('playfab-sdk');

function getKey() {
	return process.env['VUE_APP_PLAYFAB_SECRET_KEY'];
}

module.exports = async function (context) {
	let playfab_key = await getKey();
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
	PlayFabServer.settings.titleId = '266B3';
	PlayFab.settings.developerSecretKey = playfab_key;
	await PlayFabServer.GetLeaderboard(leaderboardRequest, function (error, result) {
		console.log(result);
		context.res = { body: result.data.Leaderboard };
	});
};
