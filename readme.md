# Inteli Planner MVC em Node.js com PostgreSQL

Este projeto é um gerenciador de tarefas desenvolvido para auxiliar alunos do Inteli na organização de suas atividades acadêmicas, pessoais e extracurriculares, oferecendo uma plataforma simples e centralizada para registrar, acompanhar e priorizar compromissos.

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
````

## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
```

2. **Instalar as dependências:**
    
```bash
npm install
```
    
3. **Configurar o arquivo `.env`:**
    
Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como as configurações do banco de dados PostgreSQL.
    

Configuração do Banco de Dados
------------------------------

1. **Criar banco de dados:**
    
    Crie um banco de dados PostgreSQL com o nome especificado no seu arquivo `.env`.
    
2. **Executar o script SQL de inicialização:**
    
```bash
npm run init-db
```
    
Isso criará a tabela `users` no seu banco de dados PostgreSQL com UUID como chave primária e inserirá alguns registros de exemplo.
    

Funcionalidades
---------------

* **Padrão MVC:** Estrutura organizada em Model, View e Controller.
* **PostgreSQL:** Banco de dados relacional utilizado para persistência dos dados.
* **UUID:** Utilização de UUID como chave primária na tabela `users`.
* **Scripts com `nodemon`:** Utilização do `nodemon` para reiniciar automaticamente o servidor após alterações no código.
* **Testes:** Inclui estrutura básica para testes automatizados.

Scripts Disponíveis
-------------------

* `npm start`: Inicia o servidor Node.js.
* `npm run dev`: Inicia o servidor com `nodemon`, reiniciando automaticamente após alterações no código.
* `npm run test`: Executa os testes automatizados.
* `npm run test:coverage`: Executa os testes e gera um relatório de cobertura de código.

Estrutura de Diretórios
-----------------------

* **`config/`**: Configurações do banco de dados e outras configurações do projeto.
* **`controllers/`**: Controladores da aplicação (lógica de negócio).
* **`models/`**: Modelos da aplicação (definições de dados e interações com o banco de dados).
* **`routes/`**: Rotas da aplicação.
* **`tests/`**: Testes automatizados.
* **`views/`**: Views da aplicação (se aplicável).

Contribuição
------------

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

Licença
-------

Este projeto está licenciado sob a Licença MIT.

Este README.md fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, configuração do banco de dados, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença. Certifique-se de personalizar as seções com detalhes específicos do seu projeto conforme necessário.
