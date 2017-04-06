var express = require('express');
var router = express.Router();
const News = require('../database/auto_insu.js').news;
var qs = require("querystring");

router.get('/', function(req, res, next) {
    //timestamp的毫秒数可直接与mogodb ISODate日期格式进行比较
    News.findOne({ create_time: req.param('id') }, function(err, doc) {
        res.render('newsDetail', { title: '这是新闻详情页', newsEntry: doc });
    });
});
module.exports = router;