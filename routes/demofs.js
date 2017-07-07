var fs = require("fs");
// fs.writeFile(filename,data,[options],callback);



/**
 * filename, 必选参数，文件名
 * data, 写入的数据，可以字符或一个Buffer对象
 * [options],flag,mode(权限),encoding
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */
function write(data) {
    fs.writeFile(__dirname + '/users2.json', new Buffer(data), { flag: 'a' }, function(err) {
        if (err) {
            console.error(err);
        } else {

            console.log('写入成功');
        }
    });
}



function readf() {
    fs.readFile(__dirname + '/users.json', { flag: 'r+', encoding: 'utf8' }, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }

        var ss = data.replace(/0}/g, '0},')
        console.log(ss)
        var w_data = '{users:[' + ss + ']}';
        write(w_data);
    });
};
readf()