const express = require('express');
var mongoose = require('mongoose');
const router = express.Router();
const path = require('path');
const Products = require('../database/auto_insu.js').products;
const uploadPic = require('../module/upload_pic.js');
const querystring = require('querystring')
var http = require('http');

router.post('/', function(req, res, next) {

    // var timestmp = new Date().getTime();
    var uploadFile = '/upload/';

    uploadPic(req, res, uploadFile, function(formField, filename) {
        //如果上传文件名为空生成时间戳
        //var timestamp = filename != '' ? filename.match(/\d*/) : new Date().getTime();
        var products = Products({
            product_type: formField.productType,
            product_title: formField.productTitle,
            product_pic: filename,
            suitable_for: formField.suitableFor,
            time_limit: formField.timeLimit,
            buy_amount: formField.buyAmount,
            basic_info: formField.basicInfo,
            insur_duty: formField.insurDuty,
            duty_avoid: formField.dutyAvoid
        });
        products.save(function(err, data) {
            res.send("success")
        });
    });
});

module.exports = router;