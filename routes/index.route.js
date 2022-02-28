const express = require('express');
const router = express.Router();
const IndexCtrl = require('../controllers/index.conroller');

/* GET index  */
router.get('/ping', IndexCtrl.ping);

module.exports = router;
