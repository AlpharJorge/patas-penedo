# Patas de Penedo

Site acadêmico de adoção responsável de animais, desenvolvido em React para a disciplina Programação Web I (UFAL).

## O que o site oferece

- Páginas de início, sobre, adoção, campanhas, como ajudar e contato.
- Catálogo com busca por texto e filtros por espécie e situação.
- Formulário para registrar interesse em conhecer um animal.
- Links para campanhas solidárias e layout responsivo.
- API em Node.js e Express, ligada a um banco MySQL local.

## Tecnologias

- React, Vite e JavaScript no site.
- Node.js, Express, CORS e `mysql2` no servidor (compatível com a autenticação padrão do MySQL 8.4).
- MySQL 8 para armazenar animais e pedidos de adoção.
- CSS responsivo e ícones Lucide React.

## Requisitos

- Node.js 20.19+ ou 22.12+ e npm.
- MySQL Server 8 em execução.
- MySQL Workbench (opcional, para executar os arquivos SQL por uma interface gráfica).

## Preparar o banco

1. Abra o MySQL Workbench e conecte-se ao servidor local na porta `3306` com o usuário `root` e a senha criada na instalação.
2. Abra e execute [`database/schema.sql`](database/schema.sql). Ele cria o banco `patas_penedo` e as tabelas `animals` e `adoption_requests`.
3. Abra e execute [`database/seed.sql`](database/seed.sql) **uma única vez**. Ele cadastra os sete animais do catálogo atual. Se executar novamente, o MySQL avisará que os IDs já existem.
4. Copie `server/.env.example` para `server/.env` e informe sua senha do MySQL em `MYSQL_PASSWORD`.

No PowerShell, na pasta do projeto:

```powershell
Copy-Item server/.env.example server/.env
```

Abra `server/.env` no editor e substitua `coloque_sua_senha_aqui` pela senha que você definiu para o usuário MySQL. Não envie esse arquivo ao GitHub.

## Executar o site

Clone o repositório e instale as dependências do site:

```powershell
git clone https://github.com/AlpharJorge/patas-penedo.git
cd patas-penedo
npm install
```

Use **dois terminais** dentro da pasta `patas-penedo`.

No primeiro terminal, inicie a API:

```powershell
cd server
npm install
npm run dev
```

No segundo terminal, na pasta principal do projeto, inicie o site:

```powershell
npm run dev
```

Abra o endereço indicado pelo Vite, normalmente `http://localhost:5173`. Deixe os dois terminais e o serviço MySQL ativos enquanto usa o site.

O Vite encaminha as chamadas `/api` para a API Express em `http://127.0.0.1:3001`. A API consulta e grava os dados no MySQL em `127.0.0.1:3306`. Se o banco ou a API estiverem indisponíveis, o catálogo mostra os dados de demonstração e o formulário avisa que o pedido ficou somente neste navegador.

## Arquivos SQL e dados

- `database/schema.sql`: cria o banco, a tabela de animais e a tabela de pedidos, com uma chave estrangeira entre elas.
- `database/seed.sql`: cadastra os sete animais iniciais. Execute apenas uma vez em um banco recém-criado.
- Pedidos feitos depois da migração são gravados localmente na tabela `adoption_requests`. Os pedidos antigos permanecem no projeto Supabase e não são copiados.

## Publicação

Para gerar os arquivos estáticos do site:

```powershell
npm run build
```

O build do React sozinho não inclui a API nem o MySQL. Para outras pessoas acessarem o site publicado, também será necessário hospedar a API Node e um MySQL acessível por ela, além de configurar as variáveis de ambiente nesse servidor. Para apresentar no próprio computador, siga os passos locais acima.

## Estrutura

```text
database/
├── schema.sql       # Banco e tabelas MySQL
└── seed.sql         # Animais iniciais
server/
├── index.js         # API Express e consultas MySQL
├── .env.example     # Exemplo de configuração local
└── package.json     # Dependências e comandos do servidor
src/
├── components/      # Navegação, páginas e componentes reutilizáveis
├── data/            # Dados de demonstração
├── lib/dataStore.js # Chamadas da interface para a API
├── App.jsx          # Rotas por hash e composição das páginas
└── App.css          # Estilos e responsividade
vite.config.js       # Proxy local das chamadas /api
```

## Autoria

Projeto desenvolvido por Jorge Victor para Programação Web I — Universidade Federal de Alagoas (UFAL).

