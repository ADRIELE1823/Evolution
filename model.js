const bd = require('./bd');

const getUser = async () =>{
    const user = await bd.getUser();
    return user;
}

const addUser = async (nome, email, senha, codigo_inep) => {
    const user = await bd.addUser(nome, email, senha, codigo_inep);
    return user;
}

module.exports = {
    getUser,
    addUser
}