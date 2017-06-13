var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose'); //导入mongoose模块
var session = require("express-session")
router.all('/', function(req, res, next) {
    req.session.user = null;
    res.send("您已经注销账户，从新<a href='login.html'>登录</a>")
    console.log(req.session.user)
})

module.exports = router;