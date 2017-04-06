var fs = require('fs');
var s = fs.readFile('auto_insu/public/css/style.css', 'utf-8', (err, data) => { //路径是相对于当前web跟目录
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
});