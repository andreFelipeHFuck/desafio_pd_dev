# Desafio Prduct Designer & Developer - Card de Jogo

## 🎯 Sua Missão

Será informada no início da chamada de desafio.

Certifique-se de que estará com a aplicação rodando e com o Figma já preparado com os elementos do card de jogo. Utilize os componentes dessa aplicação como base para elaborar o design no figma.

## 🚀 Como Rodar

```bash
# 1. Clonar o projeto
git clone https://github.com/elsonsilva/desafio_pd_dev.git

# 2. Entrar na pasta
cd desafio_pd_dev

# 3. Instalar dependências
npm install

# 4. Rodar o projeto
ng serve

# 5. Abrir no navegador
http://localhost:4200
```

## 📁 Estrutura

```
src/
├── app/
│   ├── app.component.html          ← Template principal
│   ├── app.component.css           ← Estilos do componente principal
│   ├── app.component.ts            ← Lógica do componente principal
│   ├── app.config.ts               ← Configuração da aplicação
│   ├── components/
│   │   ├── match-card.component.html  ← TRABALHE AQUI! (Template)
│   │   ├── match-card.component.scss  ← TRABALHE AQUI! (Estilos)
│   │   └── match-card.component.ts    ← TRABALHE AQUI! (Lógica)
│   ├── models/
│   │   └── match.model.ts          ← Tipos TypeScript
│   └── services/
│       └── match.service.ts        ← Busca os dados
└── assets/
    └── data/
        └── matches.json            ← Dados dos jogos
```
