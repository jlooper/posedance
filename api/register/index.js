const { PlayFabClient } = require('playfab-sdk');

module.exports = function (context, req) {
	var registerRequest = {
		Email: req.body.email,
		Password: req.body.password,
		Username: req.body.username,
		RequireBothUsernameAndEmail: true,
	};
	PlayFabClient.settings.titleId = '266B3';
	PlayFabClient.RegisterPlayFabUser(registerRequest, function (error, result) {
		if (error == null) {
			context.res = { body: result.data };
			context.done();
		} else {
			context.res = { body: error };
			context.done();
		}
	});
};
