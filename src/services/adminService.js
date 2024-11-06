const bcrypt = require("bcryptjs/dist/bcrypt");
const Admin = require("../models/Admin");

const adminService = {
    create: async(admin) =>{
        try {
            const senhaCripto = await bcrypt.hash(admin.senha, 10);

            return await Admin.create({
                nome: admin.nome,
                senha: senhaCripto,
              });
        
        } catch (error) {
            throw error("Ocorreu um erro ao criar pedido.");
        }
    },
    delete: async (id) => {
        try {
          const admin = await Admin.findByPk(id);
          if (!admin) {
            return null;
          }
          await admin.destroy();
          return admin;
          
        } catch (error) {
          throw error("Ocorreu um erro ao deletar pedido.");
        }
      },
}

module.exports = adminService;