const { PlayFabClient } = require('playfab-sdk');

module.exports = function (context, req) {
	var loginRequest = {
		Email: req.body.email,
		Password: req.body.password,
	};
	PlayFabClient.settings.titleId = '266B3';
	PlayFabClient.LoginWithEmailAddress(loginRequest, function (error, result) {
		if (error == null) {
			context.res = { body: result.data };
			context.done();
		} else {
			context.res = { body: error };
			context.done();
		}
	});
};
