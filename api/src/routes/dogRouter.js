const { Router } = require('express');
const { getDogByName } = require('../controllers/getDogByName');
const { postDog } = require('../controllers/postDog');
const { validateDogMiddleware } = require('../middlewares/validateDogMiddleware');
const { getDogById } = require('../controllers/getDogById');
const { deleteDog } = require('../controllers/deleteDog');
const { updateDog } = require('../controllers/updateDog');

const router = Router();

    router.get('/', getDogByName)
    router.post('/', validateDogMiddleware, postDog)
    router.put('/:id', updateDog)
    router.get('/:id', getDogById)
    router.delete('/:id', deleteDog)
    
module.exports = router