const db = require('../config/db');

class Category {
    static async create({ name }) {
        const query = `
            INSERT INTO categories (name)
            VALUES ($1)
            RETURNING *
        `;
        const values = [name];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao criar categoria: ${error.message}`);
        }
    }

    static async findAll() {
        const query = 'SELECT * FROM categories ORDER BY name';
        
        try {
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw new Error(`Erro ao buscar categorias: ${error.message}`);
        }
    }

    static async findById(id) {
        const query = 'SELECT * FROM categories WHERE id = $1';
        const values = [id];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao buscar categoria: ${error.message}`);
        }
    }

    static async update(id, { name }) {
        const query = `
            UPDATE categories 
            SET name = $1
            WHERE id = $2 
            RETURNING *
        `;
        const values = [name, id];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao atualizar categoria: ${error.message}`);
        }
    }

    static async delete(id) {
        const query = 'DELETE FROM categories WHERE id = $1 RETURNING *';
        const values = [id];

        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Erro ao deletar categoria: ${error.message}`);
        }
    }

    static async getTasksByCategory(id) {
        const query = `
            SELECT t.* 
            FROM tasks t
            WHERE t.category_id = $1
            ORDER BY t.created_at DESC
        `;
        const values = [id];

        try {
            const result = await db.query(query, values);
            return result.rows;
        } catch (error) {
            throw new Error(`Erro ao buscar tarefas da categoria: ${error.message}`);
        }
    }
}

module.exports = Category; 