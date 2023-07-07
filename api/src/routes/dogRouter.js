const { Router } = require('express');
const { getDogById } = require('../controllers/getDogById');
const { getDogByName } = require('../controllers/getDogByName');

const router = Router();

    router.get('/', getDogByName)
    router.get('/:id', getDogById)
    
module.exports = router