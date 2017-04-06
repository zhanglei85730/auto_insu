var express = require('express');
var router = express.Router();
const News = require('../database/auto_insu.js').news;

router.get('/', (erq, res, next) => {
    let newsObj = {};
    findNews('type06', ['news_title', 'create_time', 'news_pic', 'news_content'], 10).then(function(docs) {
        newsObj.zcjd = docs;
        return findNews('type07', ['news_title', 'create_time', 'news_pic', 'news_content'], 10);
    }).then(function(docs) {
        newsObj.bszn = docs;
        return findNews('type09', ['news_title', 'create_time', 'news_pic', 'news_content'], 10);
    }).then(function(docs) {
        newsObj.cjnm = docs;
        return findNews('type10', ['news_title', 'create_time', 'news_pic', 'news_content'], 10);
    }).then(function(docs) {
        newsObj.fyjx = docs;
        return findNews('type05', ['news_title', 'create_time'], 7);
    }).then(function(docs) {
        newsObj.aqcs = docs;
        return findNews('type08', ['news_title', 'create_time'], 10);
    }).then(function(docs) {
        newsObj.yczd = docs;
        res.render('guide', { title: '用车指南', newsList: newsObj });
    });

});
module.exports = router;

function findNews(newsType, fileds, limit) {
    return News.find({ news_type: newsType }, fileds, { limit: limit }, function(err, docs) {}).sort({ create_time: -1 });
}



return findNews('type06', ['news_title', 'create_time', 'news_pic', 'news_content'], 10);