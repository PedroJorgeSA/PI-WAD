# Inteli Planner - Sistema de Gerenciamento de Tarefas

Este é um sistema de gerenciamento de tarefas desenvolvido com Node.js, Express e PostgreSQL, seguindo a arquitetura MVC.

## 📸 Screenshots

### Login
![Login Preview](/Assets/loginPreview.png)

### Visualização de Tarefas
![All Tasks Preview](/Assets/alltasksPreview.png)

## 🎥 Demonstração

[Assista ao vídeo de demonstração](https://drive.google.com/file/d/15EGvIKQJ742Y1wKsb7A_-23fC0ppQ8om/view?usp=sharing)

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


## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/PedroJorgeSA/PI-WAD
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


- **Arquitetura**: MVC (Model-View-Controller)  
- **Ferramenta de Diagramação**: Draw.io

---

## Modelos (Models)

### Entidades e Atributos:

#### Task (Tarefa)
- `id` (SERIAL PRIMARY KEY)  
- `title` (VARCHAR)  
- `description` (TEXT)  
- `status` (VARCHAR)  
- `created_at` (TIMESTAMP)  
- `updated_at` (TIMESTAMP)  
- `user_id` (INTEGER FK)  
- `category_id` (INTEGER FK)  

#### User (Usuário)
- `id` (SERIAL PRIMARY KEY)  
- `name` (VARCHAR)  
- `email` (VARCHAR UNIQUE)  
- `password` (VARCHAR)  

#### Category (Categoria)
- `id` (SERIAL PRIMARY KEY)  
- `name` (VARCHAR)  

### Relações:
- Uma tarefa pertence a um usuário (N:1)  
- Uma tarefa pertence a uma categoria (N:1)  
- Um usuário pode ter várias tarefas (1:N)  
- Uma categoria pode ter várias tarefas (1:N)  

---

## Controladores (Controllers)

### 1. TarefaController
**Responsabilidades**: Gerenciar operações CRUD de tarefas  
**Métodos**:
- `criarTarefa(req, res)`: Cria nova tarefa  
- `listarTarefas(req, res)`: Lista todas as tarefas  
- `buscarTarefa(req, res)`: Busca tarefa por ID  
- `editarTarefa(req, res)`: Atualiza tarefa existente  
- `excluirTarefa(req, res)`: Remove tarefa  

### 2. UserController
**Responsabilidades**: Gerenciar operações de usuários  
**Métodos**:
- `getAllUsers(req, res)`: Lista todos usuários  
- `getUserById(req, res)`: Busca usuário por ID  
- `createUser(req, res)`: Cria novo usuário  
- `updateUser(req, res)`: Atualiza usuário  
- `deleteUser(req, res)`: Remove usuário  

---

## Interação MVC

- Controllers recebem requisições HTTP  
- Utilizam Models para operações no banco  
- Retornam dados para Views via `res.json()` ou `res.render()`  

---

## Views (Views)

### Páginas Principais:
- `index.ejs`  
  - Lista de tarefas  
  - Formulário de criação  
  - Interface de edição/exclusão  

### Componentes:
- Navegação (navbar)  
- Cards de tarefas  
- Formulários  
- Mensagens de feedback  

---

## Infraestrutura

### Componentes:

#### Banco de Dados:
- **PostgreSQL**  
- Conexão via `node-postgres (pg)`  
- Variáveis de ambiente para configuração  

#### Servidor:
- **Node.js**  
- **Express.js**  
- **EJS** como template engine  

### Dependências Principais:
- `express`: Framework web  
- `pg`: Cliente PostgreSQL  
- `dotenv`: Configuração de ambiente  
- `cors`: Middleware CORS  
- `body-parser`: Parser de requisições  

---

## Integração MVC

- Models interagem diretamente com PostgreSQL  
- Controllers processam lógica de negócios  
- Views renderizam interface usando EJS  

---

## Implicações da Arquitetura

### Escalabilidade:
- Separação clara de responsabilidades  
- Fácil adição de novos módulos  
- Possibilidade de escalar componentes independentemente  

### Manutenção:
- Código organizado e modular  
- Fácil identificação de problemas  
- Alterações isoladas por camada  

### Testabilidade:
- Estrutura favorável para testes unitários  
- Possibilidade de mock de componentes  
- Testes independentes por camada  


## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
