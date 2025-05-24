// controllers/TarefaController.js
const Task = require('../models/Task');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  const { nome: title, descricao: description } = req.body;

  // Validação dos campos obrigatórios
  if (!title) {
    return res.status(400).json({ error: 'O nome da tarefa é obrigatório' });
  }

  try {
    const tarefa = await Task.create({ title, description });
    res.status(201).json(tarefa);
  } catch (err) {
    console.error('Erro ao criar tarefa:', err);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Task.findAll();
    res.status(200).json(tarefas);
  } catch (err) {
    console.error('Erro ao listar tarefas:', err);
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

// Buscar uma tarefa por ID
exports.buscarTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    const tarefa = await Task.findById(id);
    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(tarefa);
  } catch (err) {
    console.error('Erro ao buscar tarefa:', err);
    res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { nome: title, descricao: description, status } = req.body;

  // Validação dos campos obrigatórios
  if (!title) {
    return res.status(400).json({ error: 'O nome da tarefa é obrigatório' });
  }

  try {
    // Primeiro verifica se a tarefa existe
    const tarefaExistente = await Task.findById(id);
    if (!tarefaExistente) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    const tarefa = await Task.update(id, { title, description, status });
    res.status(200).json(tarefa);
  } catch (err) {
    console.error('Erro ao atualizar tarefa:', err);
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    // Primeiro verifica se a tarefa existe
    const tarefaExistente = await Task.findById(id);
    if (!tarefaExistente) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    await Task.delete(id);
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    console.error('Erro ao excluir tarefa:', err);
    res.status(500).json({ error: 'Erro ao excluir tarefa' });
  }
};