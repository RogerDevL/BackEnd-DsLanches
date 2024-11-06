const {Router} = require('express');
const pedidoController = require('../controllers/pedidoController');
const router = Router();


router.post('/', pedidoController.create);

router.put('/:id', pedidoController.update);

router.delete('/:id', pedidoController.delete);

router.get('/:id', pedidoController.getOne);

router.get('/', pedidoController.getAll);


module.exports = router;