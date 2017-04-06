const formidable = require('formidable');
const News = require('../database/auto_insu.js').news;
var mongoose = require('mongoose');
const fs = require('fs');

function uploadPic(req, res, path, cb) {
    //上传图片


    var form = new formidable.IncomingForm();
    var AVATAR_UPLOAD_FOLDER = path;
    var form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8'; //设置编辑
    form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 10 * 1024 * 1024; //文件大小
    var newFileName; //修改后的文件名
    var formField = {}, //保存上传表单input的name值
        extNameArr = [],
        files = []; //上传文件，可以以多个文件

    form.on('error', function(err) {
            console.log(err); //各种错误
        }).on('field', function(field, value) {
            formField[field] = value;
        }).on('file', function(field, file) { //上传文件        
            files.push(file);
        })
        .on('end', function() {
            console.log(files)
            for (var i = 0; i < files.length; i++) {
                var strpath = files[i].path;
                //取出文件扩展名
                var extname = strpath.match(/[^\.]*(\.\w*)/);
                //RegExp.$1为匹配的文件后缀名
                if (extname != null) {
                    extNameArr.push(extname);
                    if (RegExp.$1 == '.jpg' || RegExp.$1 == '.gif' || RegExp.$1 == '.png') {
                        newFileName = new Date().getTime() + RegExp.$1;
                        console.log(newFileName);
                        var timestmp = new Date().getTime();
                        fs.renameSync(strpath, form.uploadDir + newFileName); //重命名
                    };
                };
            };
            //判断上传文件不为空
            if (extNameArr.length > 0) {
                console.log('有上传文件')
                    //返回表单位字段及文件名
                cb(formField, newFileName)
            } else {
                cb(formField, '')
            };
        });

    form.parse(req); //解析request对象
    // form.parse(req, function(err, fields, files) {
    //     if (err) {
    //         if (err) console.error(err);
    //         return;
    //     };
    //     var extName = ''; //后缀名 

    //     console.log(files);
    //     switch (files.fulAvatar.type) {
    //         case 'image/pjpeg':
    //             extName = 'jpg';
    //             break;
    //         case 'image/jpeg':
    //             extName = 'jpg';
    //             break;
    //         case 'image/png':
    //             extName = 'png';
    //             break;
    //         case 'image/x-png':
    //             extName = 'png';
    //             break;
    //         case 'image/gif':
    //             extName = 'gif';
    //             break;
    //     };
    //     if (extName.length == 0) {
    //         res.locals.error = '只支持png和jpg格式图片';
    //         //res.render('index', { title: TITLE });
    //         return;
    //     };
    //     var avatarName = fileTimestmp + '.' + extName;
    //     var newPath = form.uploadDir + avatarName;
    //     //console.log(files)
    //     // fs.renameSync(files.fulAvatar.path, newPath); //重命名
    //     cb(avatarName, fields, files);
    // });

};

module.exports = uploadPic;