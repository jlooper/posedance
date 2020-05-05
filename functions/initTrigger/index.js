function getKey() {
	return process.env['VUE_APP_PLAYFAB_SECRET_KEY'];
}
module.exports = async function (context, req) {
	if (req.method === 'GET') {
		if (playfab_key === null) {
			playfab_key = await getKey();
		}

		context.res = { body: playfab_key };
	}

	// Otherwise
	context.res = { status: 404 };
};
