const db = require('../config/db');

class Task {
    static async create({ title, description, status = 'pendente', user_id = null, category_id = null }) {
        const query = `
            INSERT INTO tasks (title, description, status, user_id, category_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `;
        const values = [title, description, status, user_id, category_id];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao criar tarefa: ${error.message}`);
        }
    }

    static async findAll() {
        const query = 'SELECT * FROM tasks ORDER BY created_at DESC';
        
        try {
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw new Error(`Erro ao buscar tarefas: ${error.message}`);
        }
    }

    static async findById(id) {
        const query = 'SELECT * FROM tasks WHERE id = $1';
        const values = [id];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao buscar tarefa: ${error.message}`);
        }
    }

    static async update(id, { title, description, status }) {
        const query = `
            UPDATE tasks 
            SET title = $1, description = $2, status = $3
            WHERE id = $4 
            RETURNING *
        `;
        const values = [title, description, status, id];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao atualizar tarefa: ${error.message}`);
        }
    }

    static async delete(id) {
        const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
        const values = [id];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao deletar tarefa: ${error.message}`);
        }
    }
}

module.exports = Task; 