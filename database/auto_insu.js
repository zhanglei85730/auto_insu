 // 引入Mongoose模块
 var mongoose = require('mongoose');
 mongoose.Promise = global.Promise;
 //获取数据库连接
 //链接数据库
 var connectStr = 'mongodb://localhost/auto_insu';
 mongoose.connect(connectStr);
 var db = mongoose.connection;
 //测试是否连接成功
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
     console.log('连接数据库成功')
 });
 //建立集合（数据表）数据结构
 //news集合
 var newSchema = mongoose.Schema({
     news_type: String,
     news_title: String,
     news_content: String,
     news_pic: String,
     create_time: {
         type: Date,
         default: Date.now
     },
     updatet_ime: {
         type: Date,
         default: Date.now
     }
 }, {
     versionKey: false,
     timestamps: { createdAt: 'create_Time', updatedAt: 'update_time' }
 });

 var productSchema = mongoose.Schema({
     product_type: String,
     product_title: String,
     product_pic: String,
     suitable_for: String,
     time_limit: String,
     buy_amount: String,
     basic_info: String,
     duty_duty: String,
     duty_avoid: String,
     create_time: {
         type: Date,
         default: Date.now
     },
     updatet_ime: {
         type: Date,
         default: Date.now
     }
 }, {
     versionKey: false,
     timestamps: { createdAt: 'create_Time', updatedAt: 'update_time' }
 });
 module.exports.news = mongoose.model('New', newSchema);
 module.exports.products = mongoose.model('Product', productSchema);