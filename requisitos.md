# Documento de Requisitos - Plataforma de Cadastro de Carrinhos Hot Wheels

## 1. Visão Geral do Sistema
A plataforma permitirá aos usuários registrar e gerenciar sua coleção de carrinhos Hot Wheels, realizando operações CRUD (Criar, Ler, Atualizar, Deletar) em cada item da coleção. Os dados dos carrinhos serão organizados em um catálogo, que poderá ser filtrado e pesquisado por diversas categorias como ano de fabricação, modelo, série, etc. O sistema será desenvolvido em Node.js puro, sem a utilização de bibliotecas externas.

## 2. Requisitos Funcionais

### 2.1 Cadastro de Usuários
- **RF-01**: O sistema deve permitir o cadastro de usuários, onde cada usuário terá um nome, email e senha.
- **RF-02**: O sistema deve permitir o login de usuários previamente cadastrados.
- **RF-03**: O sistema deve permitir a atualização dos dados do usuário (nome, email, senha).
- **RF-04**: O sistema deve permitir a exclusão da conta do usuário.

### 2.2 Gestão de Colecionáveis
- **RF-05**: O sistema deve permitir o cadastro de carrinhos Hot Wheels com os seguintes campos:
  - id
  - Nome
  - Número da Coleção
  - Ano de Fabricação
  - Nome da Série
  - Número da Série
  - Imagem
- **RF-06**: O sistema deve permitir a listagem de todos os carrinhos cadastrados por um usuário.
- **RF-07**: O sistema deve permitir a visualização dos detalhes de um carrinho específico.
- **RF-08**: O sistema deve permitir a atualização das informações de um carrinho cadastrado.
- **RF-09**: O sistema deve permitir a exclusão de um carrinho da coleção.

### 2.3 Catálogo e Pesquisa
- **RF-10**: O sistema deve permitir a busca de carrinhos por diferentes critérios (nome, ano, modelo, série).
- **RF-11**: O sistema deve permitir a filtragem de carrinhos por categorias (ano, série, cor).
- **RF-12**: O sistema deve exibir uma galeria de imagens dos carrinhos cadastrados.

## 3. Requisitos Não Funcionais

### 3.1 Desempenho
- **RNF-01**: O sistema deve ser capaz de responder a uma solicitação de leitura (GET) de um carrinho em menos de 200ms.
- **RNF-02**: O sistema deve ser escalável para suportar até 1000 usuários simultâneos.

### 3.2 Segurança
- **RNF-03**: As senhas dos usuários devem ser armazenadas de forma segura utilizando hash.
- **RNF-04**: O sistema deve garantir a integridade e privacidade dos dados dos usuários.
- **RNF-05**: O sistema deve implementar proteção contra ataques de injeção de código (SQL Injection, XSS).

### 3.3 Manutenibilidade
- **RNF-06**: O código do sistema deve ser modular, seguindo o padrão MVC para facilitar a manutenção e futuras expansões.
- **RNF-07**: O sistema deve incluir testes unitários para as principais funcionalidades.

### 3.4 Usabilidade
- **RNF-08**: A interface do usuário deve ser intuitiva e responsiva, adaptando-se a diferentes tamanhos de tela.
- **RNF-09**: O sistema deve fornecer feedback imediato ao usuário para ações como salvar, atualizar e excluir.

## 4. Arquitetura MVC

### 4.1 Model (M)
- Responsável pela lógica de negócios e manipulação dos dados.
- Modelos incluem:
  - `User`: Representa o usuário da plataforma, incluindo métodos para autenticação e gerenciamento de conta.
  - `HotWheelsCar`: Representa um carrinho Hot Wheels, incluindo métodos para CRUD.

### 4.2 View (V)
- Responsável pela interface com o usuário.
- Inclui páginas HTML/CSS e JavaScript para exibir os dados dos carrinhos e permitir interações.
- Exemplo de Views:
  - `home.html`: Página inicial com catálogo e funcionalidades de pesquisa.
  - `car_details.html`: Exibe os detalhes de um carrinho específico.

### 4.3 Controller (C)
- Responsável por receber as requisições do usuário, interagir com os Models, e devolver a resposta apropriada via Views.
- Exemplo de Controllers:
  - `UserController`: Gerencia ações de login, registro e atualização de usuários.
  - `CarController`: Gerencia as operações CRUD para os carrinhos Hot Wheels.

## 5. Considerações Finais
O sistema será desenvolvido de forma a garantir modularidade, segurança, e facilidade de manutenção, utilizando o padrão MVC para separar as responsabilidades e facilitar o desenvolvimento colaborativo.

---