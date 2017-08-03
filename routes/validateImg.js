var express = require('express');
var router = express.Router();
var sesssion = require("express-session");
// var identCodeData = require("../module/validate");
var BMP24 = require('gd-bmp'); //gd-bmp
var fs = require("fs")
var url = require("url");
var qs = require('querystring');

/**
 * 生成验证码
 */

//仿PHP的rand函数
function rand(min, max) {
    return Math.random() * (max - min + 1) + min | 0; //特殊的技巧，|0可以强制转换为整数
}
//抽取数组中的一个数据
function getOneOfArray(arr) {
    var arrIndex = parseInt(Math.random() * arr.length);
    return arr[arrIndex]
};
//定义随机颜色
var colorArr = new Array(0xff3333, 0xcc00cc, 0x0000cc, 0x339900, 0xff6600, 0x333333, 0x660066, 0x666633);
//制造验证码图片
function makeCapcha() {
    var validateWidth = 90;
    var validateHeight = 34;
    // var img = new BMP24(100, 40);
    var img = new BMP24(validateWidth, validateHeight);

    //边框
    //img.drawRect(0, 0, img.w - 1, img.h - 1, rand(0, 0xbff0d8));    
    //画实心矩形
    img.fillRect(0, 0, img.w, img.h, 0xa9ecda)
    img.drawCircle(rand(0, validateWidth), rand(0, validateHeight), rand(10, validateHeight), rand(0, 0xffffff));
    // img.fillRect(rand(0, 100), rand(0, 40), rand(10, 35), rand(10, 35), rand(0, 0xffffff));
    img.drawLine(rand(0, validateWidth), rand(0, validateHeight), rand(0, validateWidth), rand(0, validateHeight), rand(0, 0xffffff));
    //return img;

    //画曲线
    var w = img.w / 2;
    var h = img.h;
    var color = rand(0, 0xffffff);
    var y1 = rand(-5, 5); //Y轴位置调整
    var w2 = rand(10, 15); //数值越小频率越高
    var h3 = rand(4, 6); //数值越小幅度越大
    var bl = rand(1, 5);
    for (var i = -w; i < w; i += 0.1) {
        var y = Math.floor(h / h3 * Math.sin(i / w2) + h / 2 + y1);
        var x = Math.floor(i + w);
        for (var j = 0; j < bl; j++) {
            img.drawPoint(x, y + j, color);
        }
    };

    var p = "ABCDEFGHKMNPQRSTUVWXYZ3456789";
    //str这生成的验证 用于前台验证使用
    var str = '';
    for (var i = 0; i < 5; i++) {
        str += p.charAt(Math.random() * p.length | 0);
    }
    // var fonts = [BMP24.font8x16, BMP24.font12x24, BMP24.font16x32];
    //设置字体大小
    var fonts = [BMP24.font8x16, BMP24.font12x24];
    var x = 4,
        y = 8;
    for (var i = 0; i < str.length; i++) {
        var f = fonts[Math.random() * fonts.length | 0];
        y = 8 + rand(-5, 5);
        //img.drawChar(str[i], x, y, f, rand(0, 0xffffff));
        img.drawChar(str[i], x, y, f, getOneOfArray(colorArr));

        x += f.w + rand(2, 6);
    }

    return { 'img': img, 'str': str };
}
//http get请求
router.get('/', (req, res, next) => {
    if (req.baseUrl == '/favicon.ico') {
        return res.end();
    }
    var validate = makeCapcha();
    var img = validate.img;
    //覆盖\login加载时写入的全局global.validateStr
    global.validateStr = validate.str;
    var identData = img.getFileData();
    //验证码数据转base64
    var identDataToBase64 = identData.toString('base64');
    res.set('Content-Type', 'text/plain');
    //设置跨域
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'get');
    res.send(identDataToBase64);
    res.end();
});

module.exports = router;