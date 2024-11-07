const {Router} = require('express');
const pedidoController = require('../controllers/pedidoController');
const { validateAdmin, validateAdminId } = require('../middlewares/ValidateAdmin');
const router = Router();


router.post('/', validateAdmin, pedidoController.create);

router.put('/:id', validateAdmin, validateAdminId, pedidoController.update);

router.delete('/:id', validateAdminId, pedidoController.delete);

router.get('/:id', validateAdminId, pedidoController.getOne);

router.get('/', pedidoController.getAll);


module.exports = router;