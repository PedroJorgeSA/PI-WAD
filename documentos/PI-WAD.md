# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Inteli Planner

#### [Pedro Jorge Alves Soares](https://www.linkedin.com/in/pedro-jorge-alves/)

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

  &nbsp;&nbsp;&nbsp;&nbsp;A organização pessoal e acadêmica é um desafio constante para os alunos do Inteli, especialmente diante da grande quantidade de tarefas, eventos e oportunidades que surgem ao longo da jornada universitária. Visando atender a essa necessidade, propõe-se o desenvolvimento de um sistema baseado na opção um, que atuará como gerenciador de tarefas e itens a serem concluídos. A escolha dessa opção se justifica pela identificação de uma demanda crescente entre os estudantes do inteli por ferramentas que facilitem a gestão de suas atividades acadêmicas, pessoais e extracurriculares.
 
 &nbsp;&nbsp;&nbsp;&nbsp;Ao longo do percurso acadêmico, os alunos do Inteli se deparam com inúmeras oportunidades de participação em projetos, eventos, programas de capacitação e atividades extracurriculares, além de suas responsabilidades acadêmicas regulares. No entanto, o grande volume de atividades pode dificultar a organização eficiente do tempo e das tarefas, comprometendo o desempenho e o aproveitamento dessas oportunidades.

 &nbsp;&nbsp;&nbsp;&nbsp;Com base nesse cenário, é essencial oferecer uma solução que permita aos estudantes monitorar seus compromissos de maneira prática e centralizada. Para solucionar esse problema o Inteli Planner nasce para atender essa necessidade, foi idealizado para atender essa demanda, proporcionando uma plataforma simples, intuitiva e eficiente. Através dele, os alunos poderão registrar, acompanhar e priorizar suas atividades, promovendo uma gestão pessoal mais organizada e favorecendo o desenvolvimento acadêmico e profissional.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

![Persona 1](/Assets/personaGeorge.png)

### 2.2. User Stories (Semana 01)

#### US01 | Como estudante de engenharia de software, quero adicionar e organizar minhas tarefas em categorias (acadêmico, pessoal, extracurricular), para que eu visualize facilmente minhas prioridades.
- **I – Independente**: Não necessita de nenhuma outra função para funcionar.
- **N – Negociável**: As categorias podem ser alteradas.
- **V – Valiosa**: A organização é a base para o alto desempenho nos estudos.
- **E – Estimável**: É possível estimar o esforço de desenvolvimento de organização simples.
- **S – Pequena**: A funcionalidade pode ser implementada em partes pequenas, como criando uma task teste para separar algumas categorias.
- **T – Testável**: Pode ser testada checando se o planner organiza em categorias.

#### US02 | Como estudante de engenharia de software, quero receber lembretes de prazos importantes, para que eu não perca entregas de trabalhos e provas.
- **I – Independente**: Pode ser desenvolvida separadamente das outras funções.
- **N – Negociável**: O formato e o tipo de lembrete (notificação push, e-mail ou dentro do próprio app) podem ser discutidos com o usuário.
- **V – Valiosa**: Evitar a perda de prazos é altamente relevante para os estudantes, aumentando seu desempenho acadêmico.
- **E – Estimável**: É possível estimar o esforço de desenvolvimento de um sistema de notificações simples.
- **S – Pequena**: A funcionalidade pode ser implementada em partes pequenas.
- **T – Testável**: Pode ser testada checando se o sistema envia alertas na hora certa para as tarefas cadastradas.

#### US03 | Como estudante de engenharia de software, quero visualizar todas as minhas tarefas em uma única tela de forma intuitiva, para que eu não me confunda usando várias ferramentas diferentes.
- **I – Independente**: Não necessita de nenhuma outra função para funcionar.
- **N – Negociável**: Os detalhes da tela (layout e exibição das tarefas) podem ser ajustados.
- **V – Valiosa**: Centralizar tarefas em uma única tela aumenta a produtividade e facilita o gerenciamento.
- **E – Estimável**: É possível estimar o esforço de desenvolvimento para criar a tela e integrar as tarefas.
- **S – Pequena**: Pode ser dividida em partes pequenas, como a implementação da interface ou a organização de tarefas por categorias.
- **T – Testável**: Pode ser testada verificando se todas as tarefas são exibidas corretamente em uma única tela.

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)
 &nbsp;&nbsp;&nbsp;&nbsp; O sistema desenvolvido é um gerenciador de tarefas que exige o planejamento e estruturação de um banco de dados relacional. O modelo lógico define as entidades principais envolvidas: usuários (users), tarefas (tasks) e categorias (categories).

 &nbsp;&nbsp;&nbsp;&nbsp; A tabela users armazena as informações dos usuários do sistema, contendo os campos id (chave primária, identificador único), name (nome do usuário), email (com valor único), e password (senha de acesso). A tabela categories define categorias para organização das tarefas e contém os campos id (chave primária) e name (nome da categoria). Já a tabela tasks registra as tarefas criadas pelos usuários e possui os campos id (chave primária), title (título da tarefa), description (descrição detalhada), status (estado da tarefa, como "pendente" ou "concluída"), user_id (chave estrangeira referenciando o usuário que criou a tarefa) e category_id (chave estrangeira que vincula a tarefa a uma categoria específica).

 &nbsp;&nbsp;&nbsp;&nbsp; Os relacionamentos entre as tabelas são os seguintes: um usuário pode ter várias tarefas (relação 1:N entre users e tasks), e uma categoria pode ser associada a várias tarefas (relação 1:N entre categories e tasks).

![Diagrama Lógico](/Assets/diagramaLogico.png)

 &nbsp;&nbsp;&nbsp;&nbsp; O modelo físico, escrito em SQL, reflete essa estrutura lógica e define a criação das tabelas com seus respectivos campos e relacionamentos. Abaixo está o código para criação do banco de dados:


```sql
-- Tabela USERS
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

-- Tabela CATEGORIES
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

-- Tabela TASKS
CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    description TEXT,
    status VARCHAR(20),
    user_id INT,
    category_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
```

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03)

## Wireframe Overview
![](/Assets/wireframeOverview.png)
*Link do Figma: https://www.figma.com/design/nyBG3BN34QiR5m7vYCwkzQ/Untitled?node-id=21-1038&t=J8OvyttrHo3GjWH7-1*

#### Tela: minhas tarefas
A tela "Minhas Tarefas" foi desenvolvida com base na User Story US01. Seu objetivo é permitir que o usuário visualize rapidamente suas atividades organizadas por categoria. O wireframe apresenta três seções distintas: Acadêmico, Pessoal e Extracurricular.

**Funcionalidades principais:**
1. Cards resumidos de tarefas: cada tarefa é exibida em um card com as seguintes informações: título, breve descrição e um ícone de checkbox para indicar o status de conclusão da atividade.
2. Botão de criação de tarefa: posicionado de forma central e com ícone intuitivo, esse botão redireciona o usuário para a tela de criação de novas tarefas.

#### Criar tarefa
Essa tela é uma extensão direta da User Story US01 e foi projetada para facilitar o registro de novas atividades de forma rápida e organizada.
1. Campos de informação para preencher a tasks, como título, descrição, data, e categoria.
2. Botão Salvar ao finalizar o preenchimento, o usuário pode salvar a tarefa e retornar à tela principal.

#### Meus lembretes
A tela de lembretes e notificações foi construída com base na User Story US02, que visa facilitar o acompanhamento de prazos importantes.
**Funcionalidades:**
1. Lista de lembretes organizados por data: cada lembrete exibe a tarefa associada e o tempo restante para o vencimento.
2. Botões de ação rápida: o usuário pode editar, ignorar ou marcar o lembrete como concluído diretamente na interface.

#### Todas as suas tarefas
A tela de visão geral reúne todas as tarefas do usuário em um único local, proporcionando uma navegação prática e organizada. Além disso, também possui a exibição unificada de todas as tarefas cadastradas, independentemente da categoria (acadêmica, pessoal ou extracurricular).

**Funcionalidades principais:**
1. Opção de editar ou excluir a task que esta na coluna.



### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---
