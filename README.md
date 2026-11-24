# Patas de Penedo

Site acadêmico de adoção responsável de animais, desenvolvido em React para a disciplina Programação Web I (UFAL).

## O que o site oferece

- Páginas de início, sobre, adoção, campanhas, como ajudar e contato.
- Catálogo com busca por texto e filtros por espécie e situação.
- Formulário para registrar interesse em conhecer um animal.
- Links para campanhas solidárias.
- Layout responsivo, ícones Lucide e mensagens condicionais conforme o resultado das ações.
- Integração opcional com Supabase. Sem credenciais, o catálogo usa os dados de demonstração e os pedidos de interesse ficam no armazenamento local do navegador.

## Tecnologias

- React 19, Vite e JavaScript.
- CSS responsivo.
- [Lucide React](https://lucide.dev/guide/packages/lucide-react) para ícones.
- Supabase REST API para o banco de dados (opcional).

## Executar localmente

Requisitos: Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Abra o endereço indicado pelo Vite, normalmente `http://localhost:5173`.

Para gerar os arquivos de publicação:

```bash
npm run build
```

## Configurar o banco de dados Supabase

1. Crie um projeto no Supabase.
2. No SQL Editor do Supabase, execute [`supabase/schema.sql`](supabase/schema.sql).
3. Copie `.env.example` para `.env.local` e informe a URL do projeto e a chave **anon/public** nas variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
4. Cadastre animais na tabela `animals` pelo Table Editor do Supabase.
5. Reinicie o servidor Vite. Os animais serão lidos do banco e os formulários de interesse gravarão em `adoption_requests`.

O esquema mantém os dados dos animais disponíveis para leitura pública e aceita novos pedidos de adoção sem permitir leitura pública desses pedidos. As credenciais não devem ser incluídas no Git. Em produção, configure limites contra spam e revise as políticas de acesso conforme a operação da ONG.

## Estrutura

```text
src/
├── components/   # Navegação, páginas e componentes reutilizáveis
├── data/         # Dados usados no modo de demonstração
├── lib/          # Acesso ao Supabase e persistência local de contingência
├── App.jsx       # Rotas por hash e composição das páginas
└── App.css       # Estilos de componentes e responsividade
supabase/
└── schema.sql    # Tabelas e políticas de acesso do banco
```

## Autoria

Projeto desenvolvido por Jorge Victor para Programação Web I — Universidade Federal de Alagoas (UFAL).
