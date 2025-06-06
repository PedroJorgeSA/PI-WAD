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
O sistema Inteli Planner possui três models principais que representam as entidades fundamentais do sistema:

## User (Usuário)

Este model gerencia todas as operações relacionadas aos usuários do sistema. Cada usuário possui um identificador único (id) que é gerado automaticamente como chave primária, um nome (name) para identificação pessoal, um email único que serve como identificador para login, e uma senha (password) que é armazenada de forma segura. O User model é fundamental para o sistema de autenticação e para relacionar tarefas específicas a seus respectivos usuários.

## Task (Tarefa)
O model Task é o núcleo do sistema de gerenciamento de tarefas. Cada tarefa possui um identificador único (id), um título (title) que descreve brevemente a tarefa, uma descrição (description) mais detalhada do que precisa ser feito, um status que indica o estado atual da tarefa (por exemplo: pendente, em andamento, concluída), e um timestamp de criação (created_at) que registra quando a tarefa foi criada. Além disso, cada tarefa está vinculada a um usuário específico através do campo user_id (chave estrangeira) e a uma categoria através do category_id (chave estrangeira), permitindo organização e filtragem eficientes das tarefas.

## Category (Categoria)
O Category model permite a organização e classificação das tarefas em grupos lógicos. Cada categoria possui um identificador único (id) e um nome (name) que descreve o tipo ou grupo de tarefas. Este model possibilita que os usuários organizem suas tarefas em diferentes contextos ou áreas, como "Trabalho", "Pessoal", "Estudos", etc.
Os models implementam um relacionamento onde:
Um usuário pode ter múltiplas tarefas (relação um-para-muitos entre User e Task)
Uma categoria pode estar associada a múltiplas tarefas (relação um-para-muitos entre Category e Task)
Cada tarefa pertence a exatamente um usuário e uma categoria (relação muitos-para-um com User e Category)

### 3.2. Arquitetura (Semana 5)

![](/Assets/arquiteturaInteliPlanner.png)

Nossa implementação do MVC é fortalecida por camadas adicionais que garantem uma melhor organização e distribuição de responsabilidades:

- **Models**: Representam as entidades do sistema e encapsulam a lógica de acesso aos dados
- **Views**: Responsáveis pela interface do usuário, utilizando EJS para renderização dinâmica
- **Controllers**: Coordenam as ações do usuário, processando requisições e gerenciando o fluxo de dados
- **Services**: Implementam a lógica de negócio e regras específicas do domínio
- **Routes**: Definem os endpoints da API e direcionam as requisições para os controllers apropriados
- **Config**: Centraliza as configurações do sistema, como conexão com banco de dados
- **Tests**: Garantem a qualidade e confiabilidade do código através de testes automatizados

Esta arquitetura foi escolhida por sua clareza e eficiência, permitindo:
- Manutenção simplificada através da separação clara de responsabilidades
- Escalabilidade facilitada pela modularização dos componentes
- Testabilidade aprimorada com componentes desacoplados
- Reutilização de código através de uma estrutura bem organizada

  
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
O atual guia de estilo do projeto se propõe ser simples e prátioa para utilização, com inspiração na criação de componentes com estilo NeoBrustalista, o design final e as decisões tomadas reforçam a prioridade por uma interface limpa e prática para gerenciar as tarefas 

## Cores
![](/Assets/Cores.png)
A identidade visual do Inteli Planner opta uma paleta vibrante e contrastante. As cores foram escolhidas para garantir visibilidade, hierarquia clara e impacto visual direto, priorizando interfaces objetivas e funcionais para a gestão de tarefas.

#### 1. Cor Principal:Purple (#E300F8)

Uma cor vibrante, energética e altamente contrastante, que assume o papel central na identidade visual. Utilizada em elementos-chave da interface como botões de ação primária, destaques e chamadas visuais. Evoca modernidade e ousadia, sem comprometer a legibilidade quando usada sobre fundo claro.

#### 2. Cor de Composição 01 — Strong Orange (#F84E00)

Um laranja intenso e quente, utilizado para composições gráficas, alertas ou reforços visuais. Essa cor cria um forte contraste com o roxo principal, ajudando a direcionar a atenção do usuário para informações complementares ou secundárias de alta prioridade. É utilizado dentro das telas como identificação das atividades acadêmicas.

#### 3. Cor de Composição 02 — Clean Blue (#009DF8)

Na verdade, trata-se de um azul vibrante (e não verde como nomeado), que adiciona um tom frio à paleta, equilibrando as cores quentes e reforçando a diversidade de contrastes visuais. Ideal para ações secundárias, gráficos, ícones ou planos de fundo que requerem presença sem roubar o foco principal.
Cores

## Tipografia
![](/Assets/Tipografia.png)

Fonte Familly: Inter
Uma fonte sem serifa (sans-serif) pensada especificamente para ambientes digitais. Otimizada para legibilidade em tamanhos variados, a Inter combina bem com a proposta de um layout funcional, direto e sem ruídos visuais.

## Layout Geral
![](/Assets/LayoutGeral.png)

A estrutura do layout do projeto foi desenhada com base em sistemas modulares de grade e espaçamento previsível, favorecendo a construção de uma interface limpa, consistente e escalável.

Margens
As margens laterais são amplas e bem definidas, garantindo respiro visual e separação clara entre o conteúdo e a borda da interface. Isso melhora a legibilidade e evita sobrecarga de informação, favorecendo o foco do usuário nas tarefas.

Espaçamento Padrão
O espaçamento entre os elementos é uniforme e funcional, aplicado de forma previsível entre campos de formulário, botões e componentes. Esse ritmo visual reforça a legibilidade e facilita a escalabilidade do sistema de design.

Colunas
O sistema de colunas segue uma grade modular (possivelmente de 12 colunas), que oferece flexibilidade na organização do conteúdo e permite reuso de componentes com alinhamento consistente. As colunas sustentam a responsividade e garantem adaptação fluida a diferentes tamanhos de tela.

Grids
As linhas-guia horizontais e verticais organizam os elementos com precisão. Elas servem como base para cards, listas, seções e módulos interativos. O uso rigoroso de grids garante consistência visual e facilita a implementação técnica do layout.

## Botões
![](/Assets/Botoes.png)

Os botões seguem a identidade visual do sistema, com destaque para a cor principal e variações que garantem flexibilidade de uso em diferentes contextos da interface. O estilo é direto, com formas retangulares, bordas levemente arredondadas e preenchimento sólido.

Tamanhos
Os botões estão disponíveis em diferentes tamanhos para se adequar à hierarquia visual e ao espaço disponível nos componentes da interface. Independentemente do tamanho, todos mantêm a mesma tipografia e contraste.

## Assets
![](/Assets/Assets.png)

A biblioteca de assets reúne elementos gráficos reutilizáveis, como cards e ícones, desenhados com linhas simples e estrutura funcional. A estética segue o estilo NeoBrutalista, com contornos evidentes e aplicação direta das cores do sistema.

Cards
Os cards utilizam cores da paleta principal para delimitar visualmente seções ou informações agrupadas. Possuem bordas definidas e estrutura limpa para facilitar a leitura e organização de conteúdo.

Ícones
Os ícones são simples, de traço único e alinhados com o estilo visual do restante da interface. São utilizados para representar ações (como adicionar, confirmar, listar, editar) de forma clara e acessível.

### 3.5. Protótipo de alta fidelidade (Semana 05)

![](/Assets/FluxoFigma.png)

A tela final tem um proposito de criar um fluxo de navegação fluido e intuitivo, guiando o usuário desde o login até o gerenciamento completo de tarefas e lembretes. Com uma interface limpa, uso estratégico das cores da paleta e elementos do estilo NeoBrutalista, a prototipação demonstra consistência visual e funcional, reforçando a proposta de uma experiência prática e organizada para o usuário final.

*Link do Figma: https://www.figma.com/design/nyBG3BN34QiR5m7vYCwkzQ/Untitled?node-id=21-1038&t=J8OvyttrHo3GjWH7-1*

### 3.6. WebAPI e endpoints (Semana 05)

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

### 3.7 Interface e Navegação 

 A navegação e as views foram estruturadas para proporcionar uma experiência fluida e intuitiva ao usuário.

#### Páginas principais

**Página principal:** Lista todas as tarefas do usuário, exibindo informações como título, descrição, status e categoria. Permite visualizar, editar, excluir e marcar tarefas como concluídas. Os dados são carregados dinamicamente do banco de dados do supabase.
**Página de formulário:** Utilizada para cadastrar uma nova tarefa ou editar uma existente. O formulário inclui campos para nome, descrição e seleção de categoria. Ao salvar, os dados são enviados ao backend, que os armazena no banco de dados.
**Página de lembretes (reminders.ejs):** Exibe lembretes cadastrados pelo usuário, organizados por data e tarefa associada.
**Página de todas as tarefas (alltaks.ejs)** Mostra todas as tarefas do usuário em formato de kanban, separadas por status (A Fazer, Fazendo, Feito), com dados vindos do banco.

#### Como funciona o fluxo de dados

1. **O controller busca os dados do banco usando o modelo:**
   - O controller (por exemplo, `TarefaController.js`) utiliza o model correspondente (por exemplo, `Task.js`) para consultar ou manipular os dados no banco de dados.
2. **A rota chama o controller:**
   - As rotas (em `routes/*.js`) recebem as requisições do usuário e direcionam para o método apropriado do controller.
3. **A view é renderizada com os dados do controller:**
   - O controller retorna os dados para a rota, que então renderiza a view EJS, passando os dados como parâmetro para exibição dinâmica.

Exemplo de rota utilizando EJS:

```js
app.get('/tarefas', async (req, res) => {
  const tarefas = await Tarefa.findAll();
  res.render('tarefas.ejs', { tarefas });
});

// Exibir formulário para criar nova tarefa
app.get('/tarefas/nova', (req, res) => {
  res.render('novaTarefa.ejs');
});

//  Exibir formulário para editar uma tarefa existente
app.get('/tarefas/:id/editar', async (req, res) => {
  const tarefa = await Tarefa.findById(req.params.id);
  res.render('editarTarefa.ejs', { tarefa });
});

//  Exibir detalhes de uma tarefa específica
app.get('/tarefas/:id', async (req, res) => {
  const tarefa = await Tarefa.findById(req.params.id);
  res.render('detalheTarefa.ejs', { tarefa });
});
```

Dessa forma, todas as informações exibidas nas páginas vêm diretamente do banco de dados, garantindo que o usuário sempre visualize dados atualizados e consistentes, conforme o padrão MVC dita.

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
