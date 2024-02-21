const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'evolution'
});

// Teste de conexão
const testConnection = async () => {
    try {
        await connection.query('SELECT 1'); // Realiza uma consulta de teste
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    }
};
testConnection();

module.exports = connection;
