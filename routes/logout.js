var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose'); //导入mongoose模块
var session = require("express-session")
router.all('/', function(req, res, next) {
    if (req.session.user != null) {
        req.session.user = null;
        res.send("您已经注销账户，从新<a href='login'>登录</a>,<a href='/'>回到首页</a>,")
    } else {
        res.send("该页面不能直接访问，<a href='/'>回到首页</a>,")
    }

})

module.exports = router;