var express = require('express');
var router = express.Router();
router.get('/', (req, res, next) => {
    //res.redirect('admin/admin.html')
    res.render('admin/products', {})
        //res.send('fffffffffefe')
})
module.exports = router;