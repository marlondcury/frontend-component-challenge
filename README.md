# Frontend Challenge: Grupo Lara
Este repositório contém a solução para o desafio técnico de Desenvolvedor Frontend. O objetivo foi converter um design do Figma em um website institucional funcional, responsivo e de alta performance para o Grupo Lara.

## Stack Técnica e Escolhas Arquiteturais
 - HTML5 Semântico
 - SASS (SCSS) com Metodologia BEM
 - Splide.js
 - Vanilla JavaScript

##  Organização do Projeto

```bash id="structure-md"
├── assets/
│   ├── css/        # Estilos compilados para produção
│   ├── scss/       # Código fonte modular (Abstracts, Components, Layout)
│   ├── img/        # Imagens otimizadas (SVG, JPG, WebP)
│   └── js/         # Scripts de interação e comportamento
│
├── index.html
└── README.md

```

## Como rodar o projeto
Clone o repositório.

Para compilar o SCSS (caso queira alterar algo): sass --watch assets/scss/main.scss:assets/css/main.css.

Execute através de um servidor local (como o Live Server do VS Code) para garantir que os vídeos e SVGs carreguem corretamente.
