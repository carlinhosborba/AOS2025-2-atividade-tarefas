const express = require("express");
const controller = require("../controllers/tarefasController");

const router = express.Router();

router.post("/", controller.criarTarefa);
router.get("/", controller.listarTarefas);
router.get("/:objectId", controller.obterTarefaPorId);
router.put("/:objectId", controller.atualizarTarefa);
router.delete("/:objectId", controller.removerTarefa);

module.exports = router;
