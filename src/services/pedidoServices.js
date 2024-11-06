const Pedido = require("../models/Pedido");

const pedidoService ={
    create: async (pedido) =>{
        try {
            return await Pedido.create({
                nome: pedido.nome,
                telefone: pedido.telefone,
                quantidade: pedido.quantidade,
                pedidos: pedido.pedidos
            });
        } catch (error) {
            throw error("Ocorreu um erro ao criar pedido.");
        }
    },

    update: async (id, pedidoToUpdate) =>{
        try {

        const pedido = await Pedido.findByPk(id);

        if(!pedido){
            return null;
        }

        await pedido.update({
            nome: pedido.nome,
            telefone: pedido.telefone,
            quantidade: pedido.quantidade,
            pedidos: pedido.pedidos
        });

        return await pedido.save();
        } catch (error) {
            throw error("Ocorreu um erro ao criar admin.");
        }
        
    },
    getById: async (id) =>{
        try {
            const pedido = await Pedido.findByPk(id);

            if(!pedido){
                return null;
            }
            return pedido;
        } catch (error) {
            throw error("Ocorreu um erro ao buscar pedido.");
        }
    },
    getAll: async () => {
        try {
          return await Pedido.findAll();
        } catch (error) {
          throw error("Ocorreu um erro ao buscar todos.");
        }
      },
      delete: async (id) => {
        try {
          const pedido = await Pedido.findByPk(id);
          if (!pedido) {
            return null;
          }
          await pedido.destroy();
          return pedido;
        } catch (error) {
          throw error("Ocorreu um erro ao deletar pedido.");
        }
      },
}

module.exports = pedidoService;