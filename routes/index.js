var express = require('express');
var router = express.Router();
const News = require('../database/auto_insu.js').news;
// var demofs = require("./demofs.js").ss
/* GET home page. */
router.get('/', function(req, res, next) {
    //静态页面及资源
    res.render('index', { user: req.session.user }, function(err, html) {
        if (err) return res.req.next(err);
        res.setHeader('content-type', 'text/html; charset=utf-8')
        res.write(html);
    })

    var pageletCount = 10

    //今日聚焦 pagelet 1
    findNews('type01', ['news_title', 'create_time'], 9).then(function(docs) {
        res.render('include/newsList01.html', { newsAssortment: docs, title: '新闻聚焦', type: 'focus' }, function(err, html) {
            if (err) return res.req.next(err);
            outPagelet(res, "#focusToday", html)
        })
    });

    //业界动态 pagelet 2
    findNews('type03', ['news_title', 'create_time', 'news_pic', 'news_content'], 10).then(function(docs) {
        res.render('include/newsList02.html', { newsAssortment: docs, title: '业界<em>动态</em>', type: 'yjdt' }, function(err, html) {
            if (err) return res.req.next(err);
            outPagelet(res, "#industryNews", html)
        })

    });
    //投保知识 pagelet 3
    findNews('type02', ['news_title', 'create_time'], 10).then(function(docs) {
        res.render('include/newsList03.html', { newsAssortment: docs, title: '投保知识', type: 'tbzs' }, function(err, html) {
            if (err) return res.req.next(err);
            outPagelet(res, "#insureKnowledge", html)
        })

    });
    //车驾管动态 pagelet 4
    findNews('type04', ['news_title', 'create_time', 'news_pic', 'news_content'], 10).then(function(docs) {
        res.render('include/newsList02.html', { newsAssortment: docs, title: '车驾管<em>动态</em>', type: 'cjgdt' }, function(err, html) {
            if (err) return res.req.next(err);
            outPagelet(res, "#cjgNews", html)
        })

    });
    //安全知识 pagelet 5
    findNews('type05', ['news_title', 'create_time'], 10).then(function(docs) {
        res.render('include/newsList03.html', { newsAssortment: docs, title: '安全常识', type: 'aqcs' }, function(err, html) {
            if (err) return res.req.next(err);
            outPagelet(res, "#safetyCommonSense", html)
        })

    });
    //政策解读 pagelet 6
    findNews('type06', ['news_title', 'create_time', 'news_pic', 'news_content'], 10).then(function(docs) {
        res.render('include/newsList02.html', { newsAssortment: docs, title: '政策<em>解读</em>', type: 'zcjd' }, function(err, html) {
            if (err) return res.req.next(err);
            outPagelet(res, "#policyElucidation", html)
        })

    });
    //办事指南 pagelet 7
    findNews('type07', ['news_title', 'create_time', 'news_pic', 'news_content'], 10).then(function(docs) {
        res.render('include/newsList02.html', { newsAssortment: docs, title: '办事<em>指南</em>', type: 'bszn' }, function(err, html) {
            if (err) return res.req.next(err);
            outPagelet(res, "#lawGuide", html)
        })

    });
    //用车指导 pagelet 8
    findNews('type08', ['news_title', 'create_time'], 11).then(function(docs) {
        res.render('include/newsList03.html', { newsAssortment: docs, title: '用车指导', type: 'yczd' }, function(err, html) {
            if (err) return res.req.next(err);
            outPagelet(res, "#useTheVehicleGuide", html)
        })

    });
    //车界内幕 pagelet 9
    findNews('type09', ['news_title', 'create_time', 'news_pic', 'news_content'], 10).then(function(docs) {
        res.render('include/newsList02.html', { newsAssortment: docs, title: '车界<em>内幕</em>', type: 'cjnm' }, function(err, html) {
            if (err) return res.req.next(err);
            outPagelet(res, "#motorDom", html)
        })

    });
    //车界内幕 pagelet 10
    findNews('type10', ['news_title', 'create_time', 'news_pic', 'news_content'], 10).then(function(docs) {
        res.render('include/newsList02.html', { newsAssortment: docs, title: '费用<em>解析</em>', type: 'fyjx' }, function(err, html) {
            if (err) return res.req.next(err);
            outPagelet(res, "#costAnalysis", html)
        })

    });


    //输出尾部标签
    function endWrite() {
        pageletCount--
        if (!pageletCount) {
            res.write("\n</body></html>");
            res.end()
        }
    }
    //输出html到页面
    function outPagelet(res, placeholder, replaceHtml) {
        res.write('<script>' +
            '$("' + placeholder + '").html(\'' + replaceHtml.replace(/\n\s*/g, '').replace(/\r/g, '') + '\')' +
            '</script>')
        endWrite();
    }
});


module.exports = router;


function findNews(newsType, fileds, limit) {
    return News.find({ news_type: newsType }, fileds, { limit: limit }, function(err, docs) {}).sort({ create_time: -1 });
}