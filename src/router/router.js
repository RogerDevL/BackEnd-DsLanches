const {Router} = require('express')
const router = Router();
const pedidoRotas = require('./pedidoRouter');
const adminController = require('../controllers/adminController');


router.use('/pedidos', pedidoRotas);

router.use('/admin/login', adminController.login);

router.use('/admin', adminController.create);

router.use('/', adminController.delete);

module.exports = router;