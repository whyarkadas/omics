var express = require('express');
var router = express.Router();

const omicController = require('../controllers/omic');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/getGenData', omicController.getGenData);
router.post('/api/getGenStats', omicController.getGenStats);
router.get('/api/getAllGenName', omicController.getAllGenName);

module.exports = router;
