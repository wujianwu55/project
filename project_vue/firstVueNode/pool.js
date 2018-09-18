const mysql = require("mysql");
let pool = mysql.createPool({
	host:"127.0.0.1",
	user:"root",
	password:"",
	port:3306,
	database:"tp",
	connectionLimit:5
});
module.exports=pool;