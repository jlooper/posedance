module.exports = async function () {
	const playfab_key = Environment.GetEnvironmentVariable(
		'VUE_APP_PLAYFAB_SECRET_KEY',
		EnvironmentVariableTarget.Process
	);
	return playfab_key;
};
