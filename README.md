# Patas de Penedo

Site acadêmico de adoção responsável de animais, desenvolvido em React para a disciplina Programação Web I (UFAL).

## Funcionalidades

- Páginas de início, sobre, adoção, campanhas, como ajudar e contato.
- Catálogo com busca por texto e filtros por espécie e situação.
- Formulário de interesse em adoção.
- API Express para consultar animais e registrar pedidos.
- Banco MySQL com dados de demonstração.
- Axios no React para fazer as requisições à API.
- Dados de demonstração e armazenamento local como alternativa quando a API não estiver disponível.

## Tecnologias

- React, Vite e JavaScript.
- Axios para chamadas HTTP do site à API.
- Node.js e Express para disponibilizar a API REST.
- MySQL, acessado pelo servidor Node usando `mysql2`.
- CSS responsivo e Lucide React.

## Executar no computador

Requisitos: Node.js 20.19+ ou 22.12+, MySQL Server e, opcionalmente, MySQL Workbench.

1. Instale as dependências do projeto:

   ```bash
   npm install
   ```

2. Crie as tabelas e carregue os animais de demonstração. No MySQL Workbench, abra `server/schema.sql` e execute o script. Ele cria o banco `patas_penedo`, as tabelas `animals` e `adoption_requests` e seis registros de exemplo.

3. Copie `server/.env.example` para `server/.env` e preencha `DB_USER` e `DB_PASSWORD` com as credenciais do seu MySQL. A senha fica apenas no servidor e não deve ser enviada ao navegador nem publicada no Git.

4. Copie `.env.example` para `.env.local`. Para executar localmente, mantenha `VITE_API_URL=http://localhost:3001/api`.

5. Abra um terminal na pasta do projeto e inicie a API:

   ```bash
   npm run dev:api
   ```

6. Abra um segundo terminal na mesma pasta e inicie o React:

   ```bash
   npm run dev
   ```

7. Acesse o endereço mostrado pelo Vite, normalmente `http://localhost:5173`.

A API oferece `GET /api/animals`, `POST /api/adoption-requests` e `GET /api/health`. O formulário grava os pedidos no MySQL quando a API e o banco estão disponíveis. Se a API estiver parada, o site usa os dados de demonstração e guarda o pedido apenas no navegador.

Para gerar os arquivos de produção do frontend:

```bash
npm run build
```

## Estrutura principal

```text
src/
├── components/       # Páginas e componentes React
├── data/             # Animais de demonstração
├── lib/api.js        # Cliente Axios
└── lib/dataStore.js  # Consultas à API e fallback local
server/
├── db.js             # Pool de conexões MySQL
├── index.js          # API Express
├── schema.sql        # Banco, tabelas e dados de exemplo
└── .env.example      # Modelo de configuração local do servidor
```

## Autoria

Projeto desenvolvido por Jorge Victor para Programação Web I — Universidade Federal de Alagoas (UFAL).
