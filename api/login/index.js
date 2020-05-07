const { PlayFabClient } = require('playfab-sdk');

module.exports = function (context, req) {
	var loginRequest = {
		Email: req.query.email,
		Password: req.query.password,
	};
	PlayFabClient.settings.titleId = '266B3';
	PlayFabClient.LoginWithEmailAddress(loginRequest, function (error, result) {
		context.res = { body: result.data };
		context.done();
	});
};
