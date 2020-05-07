const { PlayFabClient } = require('playfab-sdk');

module.exports = function (context, req) {
	var registerRequest = {
		Email: req.email,
		Password: req.password,
		Username: req.username,
		RequireBothUsernameAndEmail: true,
	};
	PlayFabClient.settings.titleId = '266B3';
	PlayFabClient.RegisterPlayFabUser(registerRequest, function (error, result) {
		context.res = { body: result.data };
		context.done();
	});
};
