# Atividade - API de Tarefas (CRUD)

API RESTful desenvolvida em **Node.js + Express**, publicada na **Vercel**, para gerenciar tarefas em memória (CRUD).

## 🚀 Links da Entrega
- **Repositório GitHub:** [https://github.com/carlinhosborba/AOS2025-2-atividade-tarefas](https://github.com/carlinhosborba/AOS2025-2-atividade-tarefas)
- **API no Vercel:** [https://aos-2025-2-atividade-tarefas.vercel.app](https://aos-2025-2-atividade-tarefas.vercel.app)

### Endpoints principais
- **GET /** → Healthcheck  
- **GET /tarefas** → Lista todas as tarefas  
- **POST /tarefas** → Cria nova tarefa  
- **GET /tarefas/:id** → Busca tarefa por ID  
- **PUT /tarefas/:id** → Atualiza tarefa existente  
- **DELETE /tarefas/:id** → Remove tarefa  

---

## 📦 Rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/carlinhosborba/AOS2025-2-atividade-tarefas.git
cd AOS2025-2-atividade-tarefas

# Instalar dependências
npm install

# Rodar em ambiente local
npm run dev
```

Servidor disponível em [http://localhost:3000](http://localhost:3000).

---

## 🧪 Testes com Postman

1. Importar a coleção: `Atividade-Tarefas.postman_collection.json`  
2. Configurar a variável `base_url`:  
   - Local: `http://localhost:3000`  
   - Produção: `https://aos-2025-2-atividade-tarefas.vercel.app`  
3. Executar as requisições na ordem:  
   - POST `/tarefas` → cria tarefa  
   - GET `/tarefas` → lista  
   - GET `/tarefas/:id` → busca específica  
   - PUT `/tarefas/:id` → atualizar  
   - DELETE `/tarefas/:id` → remover  

---

## 🎥 Vídeo de Demonstração

Link para vídeo no YouTube (até 1 min) mostrando os testes no Postman:  
👉 *[https://youtu.be/rQhCwDzZS6c]*

---

## 📄 Licença
Este projeto está sob a licença MIT.
