const { v4: uuidv4, validate: uuidValidate } = require("uuid");

// "Banco" em memória
const tarefas = [];

// POST /tarefas
function criarTarefa(req, res) {
  const { descricao, concluida } = req.body ?? {};

  if (!descricao || typeof descricao !== "string" || !descricao.trim()) {
    return res.status(400).json({ error: 'Campo "descricao" é obrigatório (string não vazia).' });
  }

  const now = new Date().toISOString();
  const nova = {
    objectId: uuidv4(),
    descricao: descricao.trim(),
    concluida: typeof concluida === "boolean" ? concluida : false,
    createdAt: now,
    updatedAt: now,
  };

  tarefas.push(nova);
  return res.status(201).json(nova);
}

// GET /tarefas
function listarTarefas(_req, res) {
  return res.json(tarefas);
}

// GET /tarefas/:objectId
function obterTarefaPorId(req, res) {
  const { objectId } = req.params;
  if (!uuidValidate(objectId)) {
    return res.status(400).json({ error: "objectId inválido (UUID esperado)." });
  }
  const tarefa = tarefas.find(t => t.objectId === objectId);
  if (!tarefa) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }
  return res.json(tarefa);
}

// PUT /tarefas/:objectId
function atualizarTarefa(req, res) {
  const { objectId } = req.params;
  if (!uuidValidate(objectId)) {
    return res.status(400).json({ error: "objectId inválido (UUID esperado)." });
  }

  const idx = tarefas.findIndex(t => t.objectId === objectId);
  if (idx === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  const { descricao, concluida } = req.body ?? {};
  if (descricao !== undefined) {
    if (typeof descricao !== "string" || !descricao.trim()) {
      return res.status(400).json({ error: 'Quando informado, "descricao" deve ser string não vazia.' });
    }
    tarefas[idx].descricao = descricao.trim();
  }
  if (concluida !== undefined) {
    if (typeof concluida !== "boolean") {
      return res.status(400).json({ error: 'Quando informado, "concluida" deve ser boolean.' });
    }
    tarefas[idx].concluida = concluida;
  }
  tarefas[idx].updatedAt = new Date().toISOString();

  return res.json(tarefas[idx]);
}

// DELETE /tarefas/:objectId
function removerTarefa(req, res) {
  const { objectId } = req.params;
  if (!uuidValidate(objectId)) {
    return res.status(400).json({ error: "objectId inválido (UUID esperado)." });
  }

  const idx = tarefas.findIndex(t => t.objectId === objectId);
  if (idx === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  tarefas.splice(idx, 1);
  return res.status(200).json({});
}

module.exports = {
  criarTarefa,
  listarTarefas,
  obterTarefaPorId,
  atualizarTarefa,
  removerTarefa,
};
