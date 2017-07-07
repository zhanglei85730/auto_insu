var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var newsUpload = require('./routes/newsUpload');
var productsUpload = require('./routes/productsUpload');
var newsDetail = require('./routes/newsDetail');

var newsMore = require('./routes/newsMore'); //新闻更多
var news = require('./routes/news'); //测试上传数据
var guide = require('./routes/guide'); //用车向导
var products = require('./routes/products'); //导入产品服务模块
var productsDetail = require('./routes/productsDetail'); //导入产品服务详情模块
var usersCenter = require('./routes/usersCenter'); //导入用户模块
var login = require('./routes/login'); //导入用户模块
var loginValidate = require('./routes/loginValidate'); //导入用户模块

var admin = require('./routes/admin'); //导入用户模块
var productsPage = require('./routes/productsPage'); //导入用户模块
var logout = require('./routes/logout'); //导入用户模块




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.set('view engine', 'html');
//修改ejs后缀为html
app.engine(".html", require("ejs").__express);
//设置session
app.use(session({
    secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
    //设置cookie过期时间
    cookie: { maxAge: 60 * 1000 * 30 }
}));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/newsUpload', newsUpload);
app.use('/productsUpload', productsUpload);
app.use('/newsDetail', newsDetail);
app.use('/newsMore', newsMore);
app.use('/news', news);
app.use('/guide', guide);
app.use('/products', products);
app.use('/productsDetail', productsDetail);
app.use('/login', login);
app.use('/loginValidate', loginValidate);
//登录用户可以跳转到/usersCenter，用户中心
app.use(function(req, res, next) {
    console.log('req.cookie:' + req.cookie)
    console.log('req.session.userbbb:' + req.session.user)
    if (!req.session.user) {
        res.send('小样儿，你没有权限访问该页面，不要再访问了')
    } else {
        next();
    }
});
app.use('/usersCenter', usersCenter);
app.use('/logout', logout);

//如果是admin用户，可以跳转到/admin、/productsPage，可以上传新闻及产品
app.use(function(req, res, next) {
    if (req.session.user.name == 'admin') {
        next();
    } else {
        res.send('你不是管理员，不要再访问了')
    }
});
app.use('/admin', admin);
app.use('/productsPage', productsPage);



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