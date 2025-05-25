// controllers/TarefaController.js
const db = require('../config/db');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  const { nome, descricao } = req.body;

  // Validação dos campos obrigatórios
  if (!nome) {
    return res.status(400).json({ error: 'O nome da tarefa é obrigatório' });
  }

  const query = 'INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *';
  const values = [nome, descricao, 'pendente'];

  try {
    const result = await db.query(query, values);
    const tarefa = result.rows[0];
    res.status(201).json(tarefa);
  } catch (err) {
    console.error('Erro ao criar tarefa:', err);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  const query = 'SELECT * FROM tasks ORDER BY id DESC';

  try {
    const result = await db.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Erro ao listar tarefas:', err);
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, status } = req.body;

  // Validação dos campos obrigatórios
  if (!nome) {
    return res.status(400).json({ error: 'O nome da tarefa é obrigatório' });
  }

  const query = `
    UPDATE tasks 
    SET title = $1, description = $2, status = $3
    WHERE id = $4 
    RETURNING *`;
  const values = [nome, descricao, status || 'pendente', id];

  try {
    const result = await db.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao atualizar tarefa:', err);
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await db.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    console.error('Erro ao excluir tarefa:', err);
    res.status(500).json({ error: 'Erro ao excluir tarefa' });
  }
};