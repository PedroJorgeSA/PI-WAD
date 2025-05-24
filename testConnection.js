require('dotenv').config();
const { Pool } = require('pg');

console.log('Configurações do banco de dados:');
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_SSL:', process.env.DB_SSL);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
});

async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('Conexão bem sucedida com o PostgreSQL!');
        
        // Tenta executar uma query simples
        const result = await client.query('SELECT NOW()');
        console.log('Query executada com sucesso:', result.rows[0]);
        
        client.release();
    } catch (err) {
        console.error('Erro ao conectar com o PostgreSQL:', err);
        console.error('Detalhes do erro:', err.message);
        if (err.code) {
            console.error('Código do erro:', err.code);
        }
    } finally {
        // Fecha o pool de conexões
        await pool.end();
    }
}

testConnection(); 