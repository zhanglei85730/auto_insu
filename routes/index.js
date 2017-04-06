var express = require('express');
var router = express.Router();
const News = require('../database/auto_insu.js').news;

/* GET home page. */
router.get('/', function(req, res, next) {
    console.time('查询时间')
    let newsObj = {};
    findNews('type01', ['news_title', 'create_time'], 9).then(function(docs) {
        newsObj.focus = docs;
        // res.render('index', { title: '首页', newsFocus: docs, hydt: judt_news })
        return findNews('type03', ['news_title', 'create_time', 'news_pic', 'news_content'], 10)
    }).then(function(docs) {
        newsObj.yjdt = docs;
        return findNews('type02', ['news_title', 'create_time'], 10);
    }).then(function(docs) {
        newsObj.tbzs = docs;
        return findNews('type04', ['news_title', 'create_time', 'news_pic', 'news_content'], 10);
        //res.render('index', { title: '首页', newsList: newsObj });
    }).then(function(docs) {
        newsObj.cjgdt = docs;
        return findNews('type05', ['news_title', 'create_time'], 10);
    }).then(function(docs) {
        newsObj.aqcs = docs;
        return findNews('type06', ['news_title', 'create_time', 'news_pic', 'news_content'], 10);
    }).then(function(docs) {
        newsObj.zcjd = docs;
        return findNews('type07', ['news_title', 'create_time', 'news_pic', 'news_content'], 10);
    }).then(function(docs) {
        newsObj.bszn = docs;
        return findNews('type08', ['news_title', 'create_time'], 11);
    }).then(function(docs) {
        newsObj.yczd = docs;
        return findNews('type09', ['news_title', 'create_time', 'news_pic', 'news_content'], 10);
    }).then(function(docs) {
        newsObj.cjnm = docs;
        return findNews('type10', ['news_title', 'create_time', 'news_pic', 'news_content'], 10);
    }).then(function(docs) {
        newsObj.fyjx = docs;
        res.render('index', { title: '首页', newsList: newsObj });
        console.timeEnd('查询时间')
    })

});

module.exports = router;


function findNews(newsType, fileds, limit) {
    return News.find({ news_type: newsType }, fileds, { limit: limit }, function(err, docs) {}).sort({ create_time: -1 });
}