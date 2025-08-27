# Desafio Prduct Designer & Developer - Card de Jogo

## 🎯 Sua Missão

Será informada no início da chamada de desafio.

Certifique-se de que estará com a aplicação rodando e com o Figma já preparado com os elementos do card de jogo. Utilize os componentes dessa aplicação como base para elaborar o design no figma.

Aplicação Angular para desenvolvimento de componente de card de jogo. Este projeto serve como base para o desafio de frontend, onde você deverá criar um componente de card.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js**: versão 18.19+ ou 20.9+ ([Download](https://nodejs.org/))
- **npm**: versão 9+ (incluído com Node.js)
- **Angular CLI**: versão 17+ (será instalado no processo)

### Verificar versões instaladas

```bash
node --version
npm --version
```

## 🚀 Instalação e Execução

### 1. Instalar Angular CLI globalmente (se não tiver)

```bash
npm install -g @angular/cli
```

### 2. Clonar o projeto

```bash
git clone https://github.com/elsonsilva/desafio_pd_dev.git
```

### 3. Entrar na pasta do projeto

```bash
cd desafio_pd_dev
```

### 4. Instalar dependências

```bash
npm install
```

### 5. Executar o projeto em modo de desenvolvimento

```bash
ng serve
```

### 6. Abrir no navegador

Acesse: [http://localhost:4200](http://localhost:4200)

A aplicação será recarregada automaticamente quando você modificar os arquivos.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── app.component.html     ← Template principal
│   ├── app.component.css      ← Estilos do componente principal
│   ├── app.component.ts       ← Lógica do componente principal
│   ├── app.config.ts          ← Configuração da aplicação
│   ├── components/
│   │   ├── match-card.component.html  ← 🎯 TRABALHE AQUI! (Template)
│   │   ├── match-card.component.scss  ← 🎯 TRABALHE AQUI! (Estilos)
│   │   └── match-card.component.ts    ← 🎯 TRABALHE AQUI! (Lógica)
│   ├── models/
│   │   └── match.model.ts     ← Tipos TypeScript
│   └── services/
│       └── match.service.ts   ← Serviço para buscar dados
└── assets/
    └── data/
        └── matches.json       ← Dados dos jogos
```

## 🎯 Objetivo do Desafio

O foco principal é desenvolver o **componente `match-card`**, que deve:

- Exibir informações dos jogos de forma clara e atrativa
- Ser responsivo para diferentes tamanhos de tela
- Seguir boas práticas do Angular
- Ter um design moderno e funcional

## 🛠️ Comandos Úteis

### Build para produção

```bash
ng build
```

## 🔧 Troubleshooting

### Problemas com dependências

```bash
# Limpar cache e reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro de versão do Angular CLI

```bash
# Atualizar Angular CLI globalmente
npm uninstall -g @angular/cli
npm install -g @angular/cli@latest
```

### Porta 4200 já em uso

```bash
# Executar em porta diferente
ng serve --port 4201
```

### Verificar versões do Angular

```bash
ng version
```

## 📱 Compatibilidade

- **Sistemas Operacionais**: Windows 10+, macOS 10.15+, Linux (Ubuntu 18.04+)
- **Navegadores**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Node.js**: LTS versions (18.19+ ou 20.9+)

## 📝 Notas Importantes

- **Figma**: Certifique-se de ter o design preparado no Figma antes da apresentação
- **Responsividade**: O componente deve funcionar em desktop, tablet e mobile

## 📞 Suporte

Em caso de dúvidas ou problemas:

1. Verifique se todas as versões estão corretas
2. Consulte a documentação oficial do [Angular](https://angular.io/docs)
3. Entre em contato com o organizador do desafio

---

**Boa sorte com o desafio! 🚀**
