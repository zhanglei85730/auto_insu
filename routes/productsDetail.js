var express = require('express');
var router = express.Router();
const Products = require('../database/auto_insu.js').products;
const News = require('../database/auto_insu.js').news;

router.get('/', (erq, res, next) => {
    let productsObj = {},
        newsObj = {};
    Products.find({ product_type: 'type01' }).then(function(docs) {
        productsObj.productServier = docs;
        return Products.find({ product_type: 'type02' }, function(err, docs) {}).sort({ create_time: -1 });
    }).then(function(docs) {
        productsObj.deferServier = docs;
        return findNews('type05', ['news_title', 'create_time'], 10);
    }).then(function(docs) {
        newsObj.aqcs = docs;
        return findNews('type08', ['news_title', 'create_time'], 11);
    }).then(function(docs) {
        newsObj.yczd = docs;
        res.render('products', { title: '产品服务', newsList: newsObj, productsList: productsObj })
    });
});

module.exports = router;

function findNews(newsType, fileds, limit) {
    return News.find({ news_type: newsType }, fileds, { limit: limit }, function(err, docs) {}).sort({ create_time: -1 });
}