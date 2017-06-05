var express = require('express');
var router = express.Router();
const News = require('../database/auto_insu.js').news;
var qs = require("querystring");

router.get('/', function(req, res, next) {
    //timestamp的毫秒数可直接与mogodb ISODate日期格式进行比较
    let newsEntry = '',
        newsObj = {};
    News.findOne({ create_time: req.param('id') }).then(function(docs) {
        newsEntry = docs;
        return findNews('type05', ['news_title', 'create_time'], 10);
    }).then(function(docs) {
        newsObj.aqcs = docs;
        return findNews('type08', ['news_title', 'create_time'], 11);
    }).then(function(docs) {
        newsObj.yczd = docs;
        res.render('newsDetail', { title: '这是新闻详情页', newsEntry: newsEntry, newsList: newsObj });
    });
});
module.exports = router;

function findNews(newsType, fileds, limit) {
    return News.find({ news_type: newsType }, fileds, { limit: limit }, function(err, docs) {}).sort({ create_time: -1 });
}

// res.render('newsDetail', { title: '这是新闻详情页', newsEntry: doc });