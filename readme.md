# Inteli Planner - Sistema de Gerenciamento de Tarefas

Este é um sistema de gerenciamento de tarefas desenvolvido com Node.js, Express e PostgreSQL, seguindo a arquitetura MVC.

## Estrutura do Projeto

```
PI-WAD/
├── Assets/                # Arquivos visuais e recursos do projeto
│   ├── diagramaLogico.png # Diagrama do banco de dados
│   └── personaGeorge.png  # Imagens de personas
│
├── config/               # Configurações do projeto
│   └── db.js            # Configuração da conexão com o banco de dados
│
├── controllers/          # Controladores da aplicação (Camada Controller)
│   ├── TaskController.js # Controlador de tarefas
│   ├── UserController.js # Controlador de usuários
│   └── CategoryController.js # Controlador de categorias
│
├── documentos/           # Documentação do projeto
│   ├── PI-WAD.md        # Documentação principal
│   └── modeloFisico.sql # Script do modelo físico do banco
│
├── models/              # Modelos da aplicação (Camada Model)
│   ├── Task.js         # Modelo de tarefas
│   ├── User.js         # Modelo de usuários
│   └── Category.js     # Modelo de categorias
│
├── routes/              # Definição das rotas da API
│   ├── taskRoutes.js   # Rotas de tarefas
│   ├── userRoutes.js   # Rotas de usuários
│   └── categoryRoutes.js # Rotas de categorias
│
├── scripts/            # Scripts utilitários
│   ├── init.sql       # Inicialização do banco
│   └── runSQLScript.js # Execução de scripts SQL
│
├── services/           # Camada de serviços
│   ├── taskService.js  # Serviços de tarefas
│   └── userService.js  # Serviços de usuários
│
├── tests/             # Testes automatizados
│   ├── integration/   # Testes de integração
│   └── unit/         # Testes unitários
│
├── views/             # Views da aplicação (EJS)
│   ├── layouts/      # Layouts base
│   ├── partials/     # Componentes parciais
│   └── pages/        # Páginas principais
│
├── server.js         # Arquivo principal do servidor
├── jest.config.js    # Configuração dos testes
├── package.json      # Dependências do projeto
├── rest.http         # Arquivo de testes de API
└── testConnection.js # Teste de conexão com banco
```

## Requisitos

- Node.js (versão X.X.X)
- PostgreSQL (versão X.X.X)

## Estrutura do projeto

```sql
PI-WAD/
│
├── Assets/                # Arquivos visuais e imagens auxiliares (ex: diagramas, personas)
│   ├── diagramaLogico.png
│   └── personaGeorge.png
│
├── config/                # Arquivos de configuração do sistema
│   └── db.js              # Configuração da conexão com o banco de dados
│
├── controllers/           # Lógica de controle das requisições (camada Controller)
│   └── userController.js
│
├── documentos/            # Documentação e arquivos de banco
│   ├── PI-WAD.md          # Documento principal do projeto
│   └── modeloFisico.sql   # Script SQL com modelo físico do banco de dados
│
├── models/                # Definição dos modelos de dados (camada Model)
│   └── userModel.js
│
├── routes/                # Definição das rotas do sistema
│   ├── frontRoutes.js     # Rotas voltadas ao frontend (se aplicável)
│   └── userRoutes.js      # Rotas relacionadas aos usuários
│
├── scripts/               # Scripts de inicialização e execução auxiliar
│   ├── init.sql
│   └── runSQLScript.js
│
├── services/              # Regras de negócio e serviços auxiliares
│   └── userService.js
│
├── tests/                 # Testes automatizados (unitários e de integração)
│   ├── userController.test.js
│   ├── userModel.test.js
│   ├── userRoutes.test.js
│   └── userService.test.js
│
├── views/                 # (Reservado para templates ou frontend, se necessário)
│
├── jest.config.js         # Configuração de testes com Jest
├── package.json           # Dependências e scripts do Node.js
├── package-lock.json      # Lockfile do npm
```

## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/seu-usuario/seu-projeto.git](https://github.com/PedroJorgeSA/PI-WAD
   cd PI-WAD
```

2. **Instalar as dependências:**
    
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
