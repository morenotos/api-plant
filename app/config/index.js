const NODE_ENV = process.env.NODE_ENV || "dev";

const ENVS = {

	dev: {
		SECRET_KEY: "799651B27B2E5D99D17C9CF6754B5",
		db: {
			url:  "mongodb://julio:prueba12@ds139267.mlab.com:39267/to-do-list"
		},
		port: 8000
	},

	test: {

	},

	production: {

	}
};

module.exports = ENVS[NODE_ENV];
