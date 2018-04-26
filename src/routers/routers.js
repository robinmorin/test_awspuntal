const dados = require('../models/dados_pessoais');

module.exports = function(app){
    app.get('/', (req,res) => {
      dados.getDados((err,data) => {
        res.status(200).json(data);
      });
    });

    app.post('/dados', (req,res) => {
      const dadosStruct = {
        id: null,
        sobrenome: req.body.sobrenome,
        nome: req.body.nome,
        telefone: req.body.telefone,
        datanascimento: req.body.datanascimento
      };

      dados.insertDados(dadosStruct, (err,data) => {
        if(data && data.InsertId){
          res.json({
            success: true,
            msg: 'Dados Pessoais inseridos',
            id: data.InsertId
          })
        }
      })
    });
};
