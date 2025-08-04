# 🔐 Secure-API-NodeJS

API RESTful desenvolvida em **Node.js** com foco em segurança e autenticação via **JWT**. A aplicação utiliza **Express.js** como framework, **Sequelize** como ORM e banco de dados **PostgreSQL** para persistência. 

Ideal para projetos que demandam controle de usuários, autenticação segura e estrutura escalável.

---

## 🎯 Funcionalidades

- Autenticação de usuários com **JWT**
- Criptografia de senhas com **bcrypt**
- Gerenciamento de arquivos com **multer**
- Integração com banco **PostgreSQL**
- ORM com Sequelize e Sequelize CLI
- Suporte a `.env` com `dotenv`
- Middleware de CORS e logs de requisições com `morgan`

---

## 📁 Estrutura do Projeto

```
Secure-API-NodeJS/
├── app.js                    # Arquivo principal da aplicação
├── bd.js                     # Configuração e conexão com o banco
├── .env                      # Variáveis de ambiente (chave secreta, DB config)
├── package.json              # Dependências do Node.js
├── README.md                 # Documentação do projeto
├── /models                   # Modelos Sequelize
├── /controllers              # Lógica de negócios
├── /routes                   # Rotas da API
└── /middlewares              # Middlewares de autenticação
```

---

## 🔐 Segurança

### JWT

A autenticação é baseada em tokens JWT com a biblioteca `jsonwebtoken`.

- Ao realizar login, o servidor gera um token assinado com a **chave secreta do `.env`**.
- O token é validado em middleware antes de acessar rotas protegidas.

### Bcrypt

As senhas são criptografadas com `bcrypt` antes de serem armazenadas no banco.

---

## 🗃️ Banco de Dados

Utiliza **PostgreSQL** e **Sequelize** como ORM.

Configuração via `.env`:

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASS=suasenha
DB_NAME=secure_api
DB_PORT=5432
JWT_SECRET=sua_chave_ultra_secreta
```

Rodar migrations:

```bash
npx sequelize-cli db:migrate
```

---

## 🚀 Como Executar

### Requisitos

- Node.js 18+
- PostgreSQL
- `npm` ou `yarn`

### Instalação

```bash
git clone https://github.com/AlvaroHClaver/Secure-API-NodeJS.git
cd Secure-API-NodeJS

# Instale dependências
npm install

# Configure .env com base no exemplo
cp .env.example .env

# Rode a API
npm start
```

---

## 🔄 Endpoints Básicos

| Método | Rota       | Descrição                         |
|--------|------------|-----------------------------------|
| GET    | `/`        | Teste de saúde da API             |
| POST   | `/login`   | Autentica usuário e retorna token |
| GET    | `/user`    | Retorna dados do usuário logado   |

Use o header:  
```
Authorization: Bearer <token>
```

---

## 🧪 Testando com curl

```bash
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email":"user@test.com","senha":"1234"}'
```

---

## 🛡️ Boas Práticas Adotadas

- Senhas **não armazenadas em texto plano**
- Separação de responsabilidade: controllers, routes, models
- Middleware de autenticação reutilizável
- Variáveis sensíveis armazenadas em `.env`

---

## 📄 Licença

Distribuído sob a licença MIT.

---

> Desenvolvido por [Alvaro H. Claver](https://github.com/AlvaroHClaver) como estudo e base segura para construção de APIs modernas com Node.js.
