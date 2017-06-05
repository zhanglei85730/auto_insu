var express = require('express');
var router = express.Router();
const News = require('../database/auto_insu.js').news;
//const url = require('url')

router.get('/', function(req, res, next) {
    var d = new Date(402070416).toLocaleDateString();
    console.log()
    let newsMoreType = req.param('newsType');
    let newsTypeName = '';
    let url = req.url;
    let pathAndQuery = '';
    let position = url.indexOf('&');
    //处理点击翻页时，地址栏出现多个pagesize传值问题
    if (position <= 0) {
        pathAndQuery = req.baseUrl.slice(1) + url.slice(1);
    } else {
        pathAndQuery = req.baseUrl.slice(1) + url.slice(1, position);
    };
    console.log(pathAndQuery);
    //定义新闻类型
    let newsType = '';
    //获取地址栏当前页参数
    let currentPage = req.param('pagesize');
    //获取新闻类型
    switch (newsMoreType) {
        case 'focus':
            newsTypeName = '今日聚焦';
            newsType = 'type01';
            break;
        case 'tbzs':
            newsTypeName = '投保知识';
            newsType = 'type02';
            break;
        case 'yjdt':
            newsTypeName = '业界动态';
            newsType = 'type03';
            break;
        case 'cjgdt':
            newsTypeName = '车驾管动态';
            newsType = 'type04';
            break;
        case 'aqcs':
            newsTypeName = '投保知识';
            newsType = 'type05';
            break;
        case 'zcjd':
            newsTypeName = '政策解读';
            newsType = 'type06';
            break;
        case 'bszn':
            newsTypeName = '办事指南';
            newsType = 'type07';
            break;
        case 'yczd':
            newsTypeName = '用车指导';
            newsType = 'type08';
            break;
        case 'cjnm':
            newsTypeName = '车界内幕';
            newsType = 'type09';
            break;
        case 'fyjx':
            newsTypeName = '费用解析';
            newsType = 'type10';
            break;
    };
    let newsList = "",
        newsObj = {};
    News.count({ news_type: newsType }).then(function(docs) {
        var page = pagination(docs, 16, currentPage);
        findNewsMore(newsType, page.perPageSize, page.currentItem).then(function(docs) {
            newsList = docs;
            return findNews('type05', ['news_title', 'create_time'], 10);
        }).then(function(docs) {
            newsObj.aqcs = docs;
            return findNews('type08', ['news_title', 'create_time'], 11);
        }).then(function(docs) {
            newsObj.yczd = docs;
            res.render('newsMore', { title: '新闻更多', newsList: newsList, newsRightList: newsObj, newsTypeName: newsTypeName, pathAndQuery: pathAndQuery, pagination: page })
        });
    });

});

//根据每页记录数查找数据
function findNewsMore(newsType, perPageSize, currentItem) {
    return News.find({ news_type: newsType }, ['create_time', 'news_title'], { limit: perPageSize, skip: currentItem }, function(err, docs) {
        if (err) console.error(err);
    }).sort({ create_time: -1 });
};

//定义列表翻页相关属性
function pagination(pageSizeTotal, perPageSize, currentPage) {
    var currentPage = currentPage >= pageSizeTotal ? pageSizeTotal : currentPage <= 1 ? 1 : currentPage;

    return {
        pageCount: Math.ceil(pageSizeTotal / perPageSize),
        currentItem: (currentPage - 1) * perPageSize,
        currentPage: currentPage || 1,
        perPageSize: perPageSize
    };

};

function findNews(newsType, fileds, limit) {
    return News.find({ news_type: newsType }, fileds, { limit: limit }, function(err, docs) {}).sort({ create_time: -1 });
}

module.exports = router;