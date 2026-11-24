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
git clone https://github.com/AlpharJorge/patas-penedo.git
cd patas-penedo
```

Crie o arquivo local de configuração copiando o exemplo. No PowerShell:

```powershell
Copy-Item .env.example .env.local
```

No macOS, Linux ou Git Bash:

```bash
cp .env.example .env.local
```

O `.env.example` já contém a URL do projeto Supabase e a chave pública `sb_publishable_...` usada pelo site. Depois, instale as dependências e inicie o servidor:

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

O repositório já está configurado para usar o projeto Supabase compartilhado do Patas de Penedo. Para rodar uma cópia local, basta criar o `.env.local` a partir do `.env.example`, como descrito acima; não é necessário criar outro projeto Supabase.

Se quiser usar um projeto Supabase próprio:

1. Crie o projeto no Supabase.
2. No SQL Editor, execute [`supabase/schema.sql`](supabase/schema.sql).
3. Substitua os valores de `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` no seu `.env.local` pela URL do novo projeto e pela chave publicável, que começa com `sb_publishable_`.
4. Cadastre os animais na tabela `animals` pelo Table Editor.
5. Reinicie o servidor Vite. O catálogo buscará os animais do banco e os formulários gravarão os pedidos em `adoption_requests`.

A URL e a chave `sb_publishable_...` são configurações públicas do cliente e estão no `.env.example`. Não coloque no GitHub a senha do banco nem chaves `sb_secret_...` ou `service_role`. O esquema ativa RLS: permite leitura pública dos animais e envio de pedidos sem leitura pública desses pedidos. Em produção, configure limites contra spam e revise as políticas de acesso conforme a operação da ONG.

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

