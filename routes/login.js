var express = require('express');
var crypto = require("crypto");
var router = express.Router();
var User = require('../database/auto_insu.js').user; // 导入user数据模块;
var sesssion = require("express-session");

router.post('/', function(req, res, next) {
    //用户名密码不为空
    var param = req.body;
    if (req.body.username != '' && req.body.userpw != '') {
        //对输入密码进行加密

        var md5 = crypto.createHash('md5');
        var userpw = md5.update(req.body.userpw).digest('base64');

        User.findOne({ name: param.username }, function(err, docs) {
            // console.log('userpw=' + docs.user_pw)
            if (err) return console.error(err);
            //判断用户是否存在
            if (docs) {
                console.log(docs)
                    //用户输入密码与已保存密码对比
                var pw = docs.user_pw;
                console.log('pw=' + pw);
                // console.log('userpw=' + userpw);
                if (pw == userpw) {
                    req.session.user = docs;
                    res.redirect('/usersCenter');
                } else {
                    //跳转到导航树页面                    
                    res.send("密码错误，回到<a href='login.html'>登录页面</a>");
                };
                //用记名不存在
            } else {
                res.send("用户名不存在，请先<a href='register.html'>注册</a>")
            }
        })

        //用户名或密码为空
    } else {
        res.send("用户名或密码错误，回到<a href='login.html'>登录页面</a>'")
    }
})

module.exports = router;