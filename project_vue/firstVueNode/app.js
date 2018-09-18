const http = require("http");
const express = require("express");
let pool = require("./pool.js");

let app = express();
let server = http.createServer(app);
server.listen(3000);


//获取首页图片
app.get("/tp_img",(req,res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	
	var sql = "SELECT count(pid) as c FROM tp_img";
	var output = {};
	var progress = 0;
	pool.query(sql, (err, result) => {
		if (err) throw err;
		var c = result[0].c;
		output.num = c;
		progress += 50;
		if (progress === 100) {
			res.send(output);
		}
	})
	var sql = "SELECT pname,url FROM tp_img";
	pool.query(sql, (err, result) => {
		if (err) throw err;
		output.data = result;
		progress += 50;
		if (progress === 100) {
			res.send(output);
		}
	})
})

/* app.get("/tp_img",(req,res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");

	var sql = "SELECT pid,url FROM tp_img";
	pool.query(sql,(err,result) => {
		if (err) {
			throw err;
		}
		res.send(result);
	})
}) */