const db = require('../config/db');

class User {
    static async create({ name, email, password }) {
        const query = `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
            RETURNING *
        `;
        const values = [name, email, password];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao criar usuário: ${error.message}`);
        }
    }

    static async findAll() {
        const query = 'SELECT id, name, email FROM users ORDER BY id';
        
        try {
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw new Error(`Erro ao buscar usuários: ${error.message}`);
        }
    }

    static async findById(id) {
        const query = 'SELECT id, name, email FROM users WHERE id = $1';
        const values = [id];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao buscar usuário: ${error.message}`);
        }
    }

    static async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao buscar usuário por email: ${error.message}`);
        }
    }

    static async update(id, { name, email }) {
        const query = `
            UPDATE users 
            SET name = $1, email = $2
            WHERE id = $3 
            RETURNING id, name, email
        `;
        const values = [name, email, id];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao atualizar usuário: ${error.message}`);
        }
    }

    static async delete(id) {
        const query = 'DELETE FROM users WHERE id = $1 RETURNING id';
        const values = [id];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao deletar usuário: ${error.message}`);
        }
    }
}

module.exports = User; 