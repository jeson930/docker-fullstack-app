var mysql = require("mysql");
const pool = mysql.createPool({
	 connectionLimit: 10,
	 host: 'mysql',
	 user: 'root',
	 passworkd: 'johnahn',
	 database: 'myapp'
});
exports.pool = pool;
