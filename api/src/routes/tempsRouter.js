const { Router } = require('express');
const { getAllTemps } = require('../controllers/getAllTemps');

const router = Router();

router.get('/', getAllTemps)

module.exports = router