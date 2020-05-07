const { PlayFabClient } = require('playfab-sdk');

module.exports = function (context, req) {
	var request = {
		Statistics: [
			{
				StatisticName: 'score',
				Value: req.query.score,
			},
		],
		headers: {
			'X-authentication': req.query.sessionId,
		},
	};
	PlayFabClient.settings.titleId = '266B3';
	PlayFabClient.UpdatePlayerStatistics(request, function (error, result) {
		context.res = { body: result.data };
		context.done();
	});
};
