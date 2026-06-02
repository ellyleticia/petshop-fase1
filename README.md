# Petshop - Fase 1

Site institucional do petshop fictício **Pet Amigo**, desenvolvido como
projeto acadêmico. Esta é a **Fase 1** do trabalho e contém apenas a
estrutura em HTML5 puro, sem CSS nem JavaScript.

## Objetivo

Apresentar a marca, os produtos e os serviços do petshop em quatro páginas
estáticas e navegáveis, demonstrando o uso de:

- HTML5 semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
  `<figure>`, `<table>`, `<address>`, `<footer>`).
- Atributos HTML clássicos de apresentação (`width`, `height`, `align`,
  `border`) em substituição ao CSS.
- Links de navegação interna com caminhos relativos.
- Listas, tabelas e figuras como meios de organizar o conteúdo sem folhas
  de estilo.

## Páginas

| Arquivo | Página | O que mostra |
|---|---|---|
| `index.html` | Início | Boas-vindas, apresentação do petshop e seção de destaques com chamadas para Produtos e Serviços. |
| `produtos.html` | Produtos | Catálogo dividido em três categorias: **Alimentação**, **Higiene** e **Acessórios**, com dois produtos por categoria (foto, nome, descrição e preço). |
| `servicos.html` | Serviços | Tabela com os serviços oferecidos, valor em R$ e coluna indicando disponibilidade de **tele-busca** (Sim / Não). |
| `contato.html` | Contato | Endereço completo em Porto Alegre/RS, canais de atendimento (telefone, WhatsApp e e-mail) e horário de funcionamento. |

## Como navegar

Todas as páginas contêm o mesmo **menu de navegação** no `<header>` e no
`<footer>`, com links relativos para as quatro páginas do site. Basta
clicar em qualquer item do menu para alternar entre Início, Produtos,
Serviços e Contato.

Para abrir o site localmente, basta abrir o arquivo `index.html` em um
navegador de internet (Google Chrome, Firefox, Edge ou Safari). Nenhuma
instalação ou servidor é necessário, pois o site é totalmente estático.

## Estrutura de pastas e arquivos

```
petshop-fase1/
├── README.md           Este arquivo de ajuda
├── .gitignore          Lista de arquivos ignorados pelo Git
├── index.html          Página inicial
├── produtos.html       Catálogo de produtos
├── servicos.html       Tabela de serviços
├── contato.html        Informações de contato
└── assets/
    └── img/            Imagens utilizadas no site
        ├── logo.png
        ├── racao-caes-adultos.jpg
        ├── racao-gatos-filhotes.jpg
        ├── shampoo-pelos-claros.jpg
        ├── escova-dental-pet.jpg
        ├── coleira-ajustavel.jpg
        └── brinquedo-mordedor.jpg
```

Os nomes de arquivos e pastas seguem a convenção: **apenas letras
minúsculas, sem espaços e sem acentos**, garantindo compatibilidade com
o GitHub Pages (que diferencia maiúsculas de minúsculas).

## Status do projeto

Este repositório corresponde à **Fase 1** do trabalho, cujo escopo é
restrito ao seguinte:

- Apenas HTML5 (sem `<style>`, sem `style="..."`, sem arquivos `.css`,
  sem `<link rel="stylesheet">`).
- Sem Bootstrap ou qualquer outro framework / CDN.
- Sem JavaScript (sem `<script>`, sem eventos como `onclick`).
- Atributos HTML de apresentação (`width`, `height`, `align`, `border`)
  são permitidos por serem parte do HTML, não do CSS.

Na **Fase 2** do projeto serão acrescentados ao site:

- **CSS** para estilização (cores, tipografia, espaçamentos, layout).
- **Bootstrap** como framework de componentes e grid responsivo.
- **JavaScript** para interatividade (validação de formulário, menus
  dinâmicos, efeitos, etc.).

## Links do projeto

- Repositório no GitHub: _(preencher após criar o repositório)_
- Site publicado no GitHub Pages: _(preencher após o deploy)_

## Autoria

Desenvolvido por **Leticia Pinto Chaves** como projeto acadêmico do
curso, ano 2026.
