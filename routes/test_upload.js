const express = require('express');
var mongoose = require('mongoose');
const router = express.Router();
const path = require('path');
const News = require('../database/auto_insu.js').news;
const uploadPic = require('../module/upload_pic.js');
const querystring = require('querystring')
var http = require('http');




router.post('/', function(req, res, next) {

    var data = ''
    req.on('data', function(chunk) {
        data += chunk;
    });
    req.on('end', function() {
        console.log(data.toString());
        //res.end();
    });

});

module.exports = router;
// var fs = require('fs');
// var data = '';
// var readable = fs.createReadStream('G:\报名照片.jpg', {
//     flags: 'r',
//     encoding: 'utf8',
//     autoClose: true,
//     mode: 0666,
// });

// readable.on('open', function(fd) {
//     //console.log('file was opened, fd - ', fd);
// });

// readable.on('readable', function() {
//     console.log('received readable');
// });

// readable.on('data', function(chunk) {
//     // console.log('read %d bytes: %s', chunk.length, chunk);
//     data += data;

// });

// readable.on('end', function() {
//     var buf = new Buffer(data);
//     var isb = Buffer.isBuffer(data);
//     console.log('类型：' + isb)
// });

// readable.on('close', function() {
//     console.log('file was closed.');
// });

// readable.on('error', function(err) {
//     console.log('error occured: %s', err.message);
// });