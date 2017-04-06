var express = require('express');
var router = express.Router();
const News = require('../database/auto_insu.js').news;

router.get('/', (erq, res, next) => {
    let newsObj = {};
    // findNews('type01', ['news_title', 'create_time'], 12).then(function(docs) {
    //     newsObj.focus = docs;
    //     return findNews('type03', ['news_title', 'create_time'], 12)
    // }).then(function(docs) {
    //     newsObj.yjdt = docs;
    //     res.render('news', { title: '新闻资讯', newsList: newsObj });
    // });
    res.render('products', { title: '产品服务', newsList: newsObj });

});
module.exports = router;

// function findNews(newsType, fileds, limit) {
//     return News.find({ news_type: newsType }, fileds, { limit: limit }, function(err, docs) {}).sort({ create_time: -1 });
// }