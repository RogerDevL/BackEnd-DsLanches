const validatePedido = (req, res, next) => {
    const {nome, telefone, quantidade, pedido, observacao} = req.body;

    if(!nome || !telefone || !quantidade || !pedido || !observacao){
        return res.status(400).json({
            msg:"Campos inválidos"
        })
    }
    next();
}

const validatePedidoId = (req, res, next) => {
    const { id } = req.params;

    if(!id || typeof id !== 'string'){
        return res.status(400).json({
            msg:"Parametro ID inválido."
        });
    }
    next();
}


module.exports = {validatePedido, validatePedidoId};