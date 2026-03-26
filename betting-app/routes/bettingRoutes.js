const express = require('express');
const router = express.Router();
const bettingController = require('../controllers/bettingController');

router.get('/', bettingController.getBets);
router.post('/place-bet', bettingController.placeBet);

module.exports = router;
