# Portfólio Pessoal - DorstKaue

Este projeto é um portfólio web pessoal desenvolvido com HTML, CSS e JavaScript puro, com o objetivo de apresentar informações profissionais de forma elegante, organizada e interativa.

## Objetivo

O site funciona como uma landing page institucional e profissional, reunindo:

- dados de contato;
- informações sobre formação e experiência;
- habilidades técnicas e comportamentais;
- projetos e links externos;
- acesso a um currículo em PDF.

## Tecnologias utilizadas

- HTML5 para estruturação do conteúdo;
- CSS3 para estilização, responsividade e identidade visual;
- JavaScript para interatividade dos elementos de acordeão;
- Normalize.css para padronização inicial dos estilos entre navegadores;
- Google Fonts para tipografia personalizada;
- Arquivos SVG, imagens e PDF para enriquecimento visual e conteúdo complementar.

## Estrutura do projeto

```text
PORTFOLIO/
│
├── index.html
├── js/
│   └── acordeon.js
├── assets/
│   ├── css/
│   │   ├── acordeon.css
│   │   ├── exp.css
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── portfolio.css
│   │   └── skills.css
│   ├── fonts/
│   ├── icons/
│   ├── img/
│   └── PDF/
```

## Funcionalidades

- Layout visual moderno e minimalista;
- Seções organizadas em accordions interativos;
- Links diretos para GitHub, LinkedIn, WhatsApp e outros projetos;
- Exibição de conteúdo em blocos claros e fáceis de navegar;
- Compatibilidade com navegação desktop e dispositivos móveis.

## Como visualizar o projeto

Este projeto foi pensado para ser publicado no GitHub Pages, então a forma mais comum de visualização é abrir o repositório publicado no navegador.

### Opção 1 — GitHub Pages

1. Faça o push do projeto para o GitHub;
2. Ative o GitHub Pages nas configurações do repositório;
3. Acesse a URL fornecida pelo GitHub.

### Opção 2 — execução local (opcional)

Se você quiser testar localmente em seu computador, pode usar um servidor simples:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Personalização

Você pode editar facilmente o conteúdo do portfólio:

- alterando textos em `index.html`;
- ajustando estilos em `assets/css/`;
- substituindo imagens em `assets/img/`;
- trocando arquivos PDF em `assets/PDF/`.

## Observação importante

O projeto utiliza caminhos absolutos como `/assets/...`, portanto a execução por meio de um servidor local é recomendada para garantir que os arquivos sejam carregados corretamente.

## Autor

Desenvolvido por DorstKaue.
