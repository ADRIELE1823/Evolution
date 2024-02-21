const model = require('./model');

const getUser = async (req, res) => {
    const user = await model.getUser();
    console.log(user);
    res.status(201).json(user);

}

const addUser = async (req, res) => {
    const {nome, email, senha, codigo_inep} = req.body;
    
    console.log(nome, email, senha, codigo_inep);
    
    const usuario = await model.addUser(nome, email, senha, codigo_inep);
    console.log(usuario);

}

module.exports = {
    getUser,
    addUser
}
