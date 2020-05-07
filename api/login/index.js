const { PlayFabClient } = require('playfab-sdk');

module.exports = function (context, req) {
	var loginRequest = {
		Email: req.email,
		Password: req.password,
	};
	PlayFabClient.settings.titleId = '266B3';
	PlayFabClient.LoginWithEmailAddress(loginRequest, function (error, result) {
		context.res = { body: result.data };
		context.done();
	});
};
