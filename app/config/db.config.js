module.exports = {
	HOST: "localhost",
	USER: "root",
	PASSWORD: "nopass",
	DB: "node_js_jwt_auth_db",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
}
