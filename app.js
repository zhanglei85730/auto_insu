var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var newsUpload = require('./routes/newsUpload');
var productsUpload = require('./routes/productsUpload');
var newsDetail = require('./routes/newsDetail');
var test_upload = require('./routes/test_upload'); //测试上传数据
var newsMore = require('./routes/newsMore'); //新闻更多
var news = require('./routes/news'); //测试上传数据
var guide = require('./routes/guide'); //用车向导
var products = require('./routes/products'); //导入产品服务模块
var productsDetail = require('./routes/productsDetail'); //导入产品服务详情模块


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.set('view engine', 'html');
//修改ejs后缀为html
app.engine(".html", require("ejs").__express);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/admin', newsUpload);
app.use('/productsUpload', productsUpload);
app.use('/newsDetail', newsDetail);
app.use('/test_upload', test_upload);
app.use('/newsMore', newsMore);
app.use('/news', news);
app.use('/guide', guide);
app.use('/products', products);
app.use('/productsDetail', productsDetail);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;