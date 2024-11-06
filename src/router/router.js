const {Router} = require('express')
const router = Router();
const pedidoRotas = require('./pedidoRouter');


router.use('/pedidos', pedidoRotas);

module.exports = router;