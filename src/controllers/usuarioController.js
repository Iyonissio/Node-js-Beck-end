const Usuario = require('../models/usuario');
const status = require('http-status');

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const salario = req.body.salario;
    const dataNascimento = req.body.dataNascimento;
    const ativo = req.body.ativo;

    Usuario.create({
        nome: nome,
        salario: salario,
        dataNascimento: dataNascimento,
        ativo: ativo
    })
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}



