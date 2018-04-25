const dados = require('../models/dados_pessoais');

module.exports = function(app){
    app.get('/', (req,res) => {
      dados.getDados((err,data) => {
        res.status(200).json(data);
      });
    });
}
