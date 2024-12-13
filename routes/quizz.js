var express = require('express');
var router = express.Router();
var hc = require('../controllar/quizz')

/* GET users listing. */
router.post('/create', hc.add);
router.get('/show', hc.show);
router.delete('/delete/:id', hc.deletedata1);

module.exports = router;
