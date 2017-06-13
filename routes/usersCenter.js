var express = require('express');
var router = express.Router();
var sesssion = require("express-session");
router.get('/', (req, res, next) => {
    res.render("userCenter", { title: '用户中心', user: req.session.user })
});

module.exports = router;