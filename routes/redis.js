var express = require("express");
var router = express.Router();
var rediz = require("redis");
var redis = rediz.createClient({ "host": "127.0.0.1", "port": "6379" });

redis.on('error', function(err) {
    console.log('errorevent - ' + redis.host + ': ' + redis.port + ' - ' + err);
});

// function redis_get_string() {
//     redis.set('key', ['string'], function(err, res) {
//         redis.get('key', function(err, res) {
//             console.log(res); //打印'string' 
//         });
//     });
// };


// redis.on('ready', function(err) {
//     //console.log('ddddddddddddddd')
// })

// redis.hmset('articl', { name: "zhanglei", age: "32", set: "mail" });
// redis.expire("articl", 3);
// flag = false

// var ss;
// redis.hgetall('articl', function(err, obj) {
//     ss = obj;
// })


// router.get('/', (req, res, next) => {

//     res.send(ss)

// })

// setTimeout(() => {
//     redis.hgetall('articl', function(err, obj) {
//         console.log('看看值:' + obj)
//     })
// }, 8000)

module.exports = router;