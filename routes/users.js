/*
通过表填写注册信息，写入数据到数据库。
然后读取出所有数据。
*/
var express = require('express');
var crypto = require("crypto");
var router = express.Router();
// var mongoose = require('mongoose'); //导入mongoose模块
var User = require('../database/auto_insu').user; // 导入user数据模块
var Counter = require('../database/auto_insu').counter;

/* GET users listing. */

//查询所有用户数据
// router.post('/', function(req, res, next) {
//     //向collection增加记录
//     // var u = new Users({name:'domi',age:1})
//     // u.save()
//     User.find(function(err, users) {
//         if (err) {
//             console.log(err);
//         }
//         res.render('users', { title: '用户列表', users: users }) //这里也可以json的格式直接返回数据res.json({data: users});
//     })
// })

//Users.save({ name: 'domi', age: 1.5, sexual: '男' })

// var mimi = new User({ name: 'admin', age: 30, sexual: '男' });

// mimi.save(function(err, mimi) {
//     if (err) return console.error(err);
// });

// var dd = new Counter({ id: 'nameid', sequence_value: 0 });

// dd.save(function(err, mimi) {
//     if (err) return console.error(err);
// });

router.post('/', function(req, res, next) {
    var param = req.body;
    // /*id自增加功能
    // 查找counters表里(collection)条件id为nameid的记录sequence_val的值自增1，并返回这条记录（document）
    // 每向users表插入一条数据就更新一次counters表的sequence_value值（递增1）*/
    var Promise = Counter.findOneAndUpdate({ "id": 'nameid' }, { $inc: { sequence_value: 1 } }, { upsert: true, new: true });

    Promise.then(function(doc) {
        //向users表单提交注册数据,id为直接调用counters表（id: 'nameid'）的 sequence_value值
        if (param.username != '' && param.age != '' && param.sexual != '' && param.userpw != '') {
            //获取表单数据
            //加密用户密码form提交的user_pw
            var md5 = crypto.createHash('md5');
            var pw = md5.update(param.userpw).digest('base64');

            var user = new User({
                name: param.username,
                user_pw: pw,
                age: param.age,
                sexual: param.sexual,
                //doc.sequence_value为counters表的id为'nameid'记录的sequence_value值
                id: doc.sequence_value,
            });

            //保存注册数据
            User.find({ name: param.username }, function(err, doc) {
                console.log(doc);
                //res.render("users", { title: '查找并显示所有用户', users: doc })
                //res.redirect(tree)
                //判断用户是否存在
                if (doc.length > 0) {
                    res.send("用户名已经注册,回到<a href='register.html'>注册页面</a>");
                } else {
                    user.save(function(err) {
                        if (err) return console.error(err);
                        //先保存然后再查询所有数据

                    }).then(function() {
                        //查询所有用户
                        User.find({}, function(err, docs) {
                            if (err) return console.error(err);
                            res.render("users", { title: '查找并显示所有用户', users: docs })
                        });
                    });

                }
            });
        } else {
            res.send('信息填写错误');
        }
    })
});




//更新记录
/*var user = new User();
User.update({ name: 'zhangl' }, { age: 33 }, { multi: true }, function(err) {
    console.log('fe')
})*/

//var user = new User();


//处理回调
/*var Promise = User.findOneAndUpdate({ name: 'zhanglei' }, { $set: { id: 0 } });
Promise.then(function(s) {
    console.log(s)
});*/

// var counter = new Counter({ "id": 'nameID', sequence_value: 0 })
// counter.save();

module.exports = router;