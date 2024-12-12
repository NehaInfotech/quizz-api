// user router

var express = require('express');
var hc=require('../controllar/user')
const router = express.Router();
const mid= require('../middleware/Authorization')


/* GET home page. */
router.post('/Signup',hc.Signup ,mid.tokensecure);
router.post('/Login',hc.Login,mid.tokensecure );
router.delete('/deletedata/:id',hc.deletedata ,mid.tokensecure);

module.exports = router;
