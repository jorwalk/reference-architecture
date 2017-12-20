var express = require('express');
var homeCtrl = require('./controllers/homeController');
var boardCtrl = require('./controllers/boardController');

var router = express.Router();

router.route('/board').get(boardCtrl.getBoard);
router.route('/board').post(boardCtrl.postBoard);
router.route('/boards').get(boardCtrl.getBoard);
router.route('/').get(homeCtrl.getHome)

module.exports = router;
