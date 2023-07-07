const { Router } = require('express');
const dogRouter = require('./dogRouter');
const tempsRouter = require('./tempsRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogRouter)
router.use('/temperaments', tempsRouter)

module.exports = router;
