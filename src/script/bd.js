const mysql = require('./connection');

const getUser = async() => {
    const query = 'SELECT * FROM instituicao';
    const [user] = await mysql.query(query);
    return user;
}

const addUser = async (nome, email, senha, codigo_inep) => {
    const query = 'INSERT INTO usuarios (nome, email, senha, codigo_inep) VALUES (?, ?, ?, ?)';
    const [user] = await mysql.query(query, [nome, email, senha, codigo_inep]);
    return user;
}

module.exports = {
    getUser,
    addUser
}