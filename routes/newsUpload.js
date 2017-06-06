const express = require('express');
var mongoose = require('mongoose');
const router = express.Router();
const path = require('path');
const News = require('../database/auto_insu.js').news;
const uploadPic = require('../module/upload_pic.js');
const querystring = require('querystring')
var http = require('http');



router.post('/', function(req, res, next) {
    console.log('test上传数据有没有过来')
        // var timestmp = new Date().getTime();
    var uploadFile = '/upload/';

    uploadPic(req, res, uploadFile, function(formField, filename) {
        //如果上传文件名为空生成时间戳
        //var timestamp = filename != '' ? filename.match(/\d*/) : new Date().getTime();
        var news = News({
            news_type: formField.newsTypeSelect,
            news_title: formField.newsTitle,
            news_content: formField.newsContent,
            news_pic: filename,
            //news_time: timestamp //取出文件名，文件名是时间戳，不包括文件扩展名
        });
        news.save(function(err, data) {
            res.send("success")
        });
    });

    //上传文件
    // var param = req.body;
    // var news = '';
    //console.log(req.body)
    // var data = ''
    // req.on('data', function(chunk) {
    //     data += chunk;
    // });


    // req.on('end', function() {
    //     //将formdata发送的数据转换为json对像       
    //     var rg = data.match(/-{6}[^-]*Content-Disposition: form-data;[^-]*/g);
    //     var temArr = [];
    //     var temp = '';
    //     for (let i = 0; i < rg.length; i++) {
    //         if (rg[i].indexOf('filename=') < 0) {
    //             var ok = rg[i].replace(/[^"]*/, '').replace(/\r|\n/g, '').replace(/(")(\w*)(")([^"]*)/, function($1, $2, $3, $4, $5) {
    //                 temp = temp + ($3 + '=' + $5) + '&';
    //             })

    //         }
    //     }




    // });


    // res.send('提交成功')
    //新闻不包含图片，保存新闻到数据库
    // if (req.body.fulAvatar == 'null') {
    //     news = News({
    //         news_type: param.newsTypeSelect,
    //         news_title: param.newsTitle,
    //         news_content: param.newsContent,
    //         news_pic: 'null',
    //         news_time: timestmp
    //     });
    //     //包含图片，保存新闻到数据库
    // } else {
    //     var timestmp = new Date().getTime();
    //     var uploadFile = '/upload/';
    //     uploadPic(req, res, uploadFile, timestmp, function(filename) {
    //         news = News({
    //             news_type: param.newsTypeSelect,
    //             news_title: param.newsTitle,
    //             news_content: param.newsContent,
    //             news_pic: filename,
    //             news_time: timestmp
    //         });
    //     });
    // };
    // news.save();
});

module.exports = router;