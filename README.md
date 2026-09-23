# 🐾 Patas de Penedo

Projeto acadêmico da disciplina **Programação Web I** (UFAL), sob orientação do professor **Gustavo Miranda**.

## 📖 Sobre o projeto

O **Patas de Penedo** é um site desenvolvido em React para uma ONG fictícia de resgate e adoção de animais na cidade de Penedo/AL.

### O problema

A ONG é mantida por voluntários que resgatam cães e gatos abandonados, mas não possui um site — toda a divulgação de animais para adoção, campanhas de doação e informações sobre a instituição é feita de forma dispersa em posts de redes sociais e grupos de WhatsApp, que se perdem rapidamente e dificultam tanto as adoções quanto as doações.

### A solução

Um site que centraliza, em um só lugar, sempre atualizado e organizado:

- Um catálogo com os animais disponíveis para adoção
- Campanhas de apadrinhamento e doação
- Informações sobre como ajudar a ONG (voluntariado, doações, divulgação)
- Dados de contato

## 🧩 Funcionalidades

- **Catálogo de animais** — cards com foto, espécie, idade, porte, temperamento e história de resgate de cada animal
- **Campanhas de apadrinhamento** — cards com campanhas ativas, cada um levando a um link próprio de contato
- **Seção "Como ajudar"** — formas de contribuir com a ONG além da adoção
- **Navegação por âncoras** — menu do topo leva direto a cada seção da página

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- JavaScript (JSX)
- CSS3 (Flexbox, responsividade)

## 📁 Estrutura do projeto

```
src/
├── components/        # Componentes de cada seção do site
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── AnimalCard.jsx
│   ├── AnimalCatalog.jsx
│   ├── CampaignCard.jsx
│   ├── Campaigns.jsx
│   ├── HowToHelp.jsx
│   └── Footer.jsx
├── data/               # Dados mockados (simulam dados de um servidor)
│   ├── animals.js
│   └── campaigns.js
├── App.jsx              # Componente raiz, monta todas as seções
├── App.css               # Estilos das seções (layout, flexbox)
├── index.css              # Estilos globais (tipografia, reset)
└── main.jsx                # Ponto de entrada, conecta o React ao HTML
```

## 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 16 ou superior)

### Passo a passo

1. Clone este repositório:
   ```bash
   git clone https://github.com/AlpharJorge/patas-penedo.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd patas-penedo
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. O terminal vai mostrar um endereço (geralmente `http://localhost:5173`) — abra ele no navegador.



## 👥 Autoria

Projeto desenvolvido por Jorge Victor, para a disciplina de Programação Web I — Universidade Federal de Alagoas (UFAL).
