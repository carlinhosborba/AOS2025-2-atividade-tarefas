// api/app.js
const express = require("express");
const tarefasRoutes = require("./routes/tarefasRoutes");

const app = express();
app.use(express.json());

// Healthcheck
app.get("/", (req, res) => {
  res.json({ status: "ok", service: "atividade-tarefas" });
});

// Rotas
app.use("/tarefas", tarefasRoutes);

// Exporta um handler (req, res) para a Vercel
module.exports = (req, res) => app(req, res);
