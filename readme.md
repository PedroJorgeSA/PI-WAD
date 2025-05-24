# Inteli Planner - Sistema de Gerenciamento de Tarefas

Este é um sistema de gerenciamento de tarefas desenvolvido com Node.js, Express e PostgreSQL, seguindo a arquitetura MVC.

## Estrutura do Projeto

```
PI-WAD/
├── config/             # Configurações do projeto
│   └── db.js          # Configuração do banco de dados
├── controllers/        # Controladores da aplicação
│   └── TarefaController.js
├── models/            # Models da aplicação
│   ├── Task.js
│   ├── User.js
│   └── Category.js
├── routes/            # Rotas da aplicação
│   └── index.js
├── scripts/           # Scripts úteis
│   └── init.sql       # Script de inicialização do banco
├── views/             # Views da aplicação (EJS)
│   └── pages/
│       └── index.ejs
└── server.js          # Arquivo principal do servidor
```

## Requisitos

- Node.js
- PostgreSQL
- npm ou yarn

## Configuração

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env` na raiz do projeto:
```env
DB_USER=seu_usuario
DB_HOST=localhost
DB_DATABASE=pi_wad
DB_PASSWORD=sua_senha
DB_PORT=5432
DB_SSL=false
```

4. Crie o banco de dados:
```bash
createdb pi_wad
```

5. Execute as migrações:
```bash
npm run init-db
```

## Executando o Projeto

```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`

## API Endpoints

### Tarefas

#### GET /api/tarefas
- Lista todas as tarefas
- Resposta: Array de tarefas

#### POST /api/tarefas
- Cria uma nova tarefa
- Body:
```json
{
    "nome": "Nome da tarefa",
    "descricao": "Descrição da tarefa"
}
```

#### PUT /api/tarefas/:id
- Atualiza uma tarefa existente
- Body:
```json
{
    "nome": "Nome atualizado",
    "descricao": "Descrição atualizada",
    "status": "em_andamento"
}
```

#### DELETE /api/tarefas/:id
- Remove uma tarefa

## Arquitetura MVC

### Models
- `Task.js`: Gerencia as operações de banco de dados relacionadas às tarefas
- `User.js`: Gerencia as operações de banco de dados relacionadas aos usuários
- `Category.js`: Gerencia as operações de banco de dados relacionadas às categorias

### Views
- Implementadas usando EJS
- Interface responsiva com Bootstrap
- Interação em tempo real com a API

### Controllers
- `TarefaController.js`: Gerencia a lógica de negócios das tarefas

## Banco de Dados

### Tabelas

#### users
- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- email (VARCHAR UNIQUE)
- password (VARCHAR)

#### categories
- id (SERIAL PRIMARY KEY)
- name (VARCHAR)

#### tasks
- id (SERIAL PRIMARY KEY)
- title (VARCHAR)
- description (TEXT)
- status (VARCHAR)
- created_at (TIMESTAMP)
- user_id (INTEGER FK)
- category_id (INTEGER FK)

## Testes

Para executar os testes:
```bash
npm test
```

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
