function getKey() {
	return process.env['VUE_APP_PLAYFAB_SECRET_KEY'];
}
module.exports = async function (context) {
	let playfab_key = await getKey();

	context.res = { body: playfab_key };
};
