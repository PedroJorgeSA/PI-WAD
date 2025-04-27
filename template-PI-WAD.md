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

*Posicione aqui os diagramas de modelos relacionais do seu banco de dados, apresentando todos os esquemas de tabelas e suas relações. Utilize texto para complementar suas explicações, se necessário.*

*Posicione também o modelo físico com o Schema do BD (arquivo .sql)*

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

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

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
