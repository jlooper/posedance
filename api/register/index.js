const { PlayFabClient } = require('playfab-sdk');

module.exports = function (context, req) {
	var registerRequest = {
		Email: req.query.email,
		Password: req.query.password,
		Username: req.query.username,
		RequireBothUsernameAndEmail: true,
	};
	PlayFabClient.settings.titleId = '266B3';
	PlayFabClient.RegisterPlayFabUser(registerRequest, function (error, result) {
		context.res = { body: result.data };
		context.done();
	});
};
