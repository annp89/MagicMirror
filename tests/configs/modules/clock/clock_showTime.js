/* Magic Mirror Test config for default clock module
 *
 * By Johan Hammar
 * MIT Licensed.
 */
let config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	language: "en",
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: "clock",
			position: "middle_center",
			config: {
				showTime: false
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
