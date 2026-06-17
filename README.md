# 🐾 Pet Amigo — Site do Petshop

Site institucional do petshop fictício **Pet Amigo**, desenvolvido como projeto
acadêmico (Fase 2). É um **site estático** — feito com HTML5, CSS3, JavaScript e
**Bootstrap 5** — pensado para ser publicado no **GitHub Pages**.

O Pet Amigo apresenta a marca, seus produtos e serviços, e oferece formulários
de **cadastro de cliente/pet** e de **agendamento de serviços**, com foco em
visual amigável, responsividade (celular) e **acessibilidade**.

Este arquivo serve como **ajuda/documentação** do projeto.

---

## 📄 Páginas do site

| Página | Arquivo | O que faz |
| --- | --- | --- |
| **Início** | `index.html` | Página inicial com um **carrossel** (Bootstrap) de 3 destaques — alimentação, banho/higiene e pets felizes — além da apresentação da loja. |
| **Serviços** | `servicos.html` | Tabela com os serviços oferecidos (banho, tosa, consulta, vacinação, hospedagem, corte de unhas), valores e disponibilidade de tele-busca. |
| **Produtos** | `produtos.html` | Catálogo de produtos em três categorias — **Alimentação, Higiene e Acessórios** — com imagem, descrição e preço de cada item. |
| **Cadastro** | `cadastro.html` | Formulário de **cadastro de cliente e pet** (com máscaras e validação). |
| **Agendamento** | `agendamento.html` | Formulário para **agendar um serviço** (nome, serviço, data e observações) com resumo na própria página. |
| **Contato** | `contato.html` | Endereço, canais de atendimento, horário de funcionamento e como visitar a loja. |

Todas as páginas compartilham o mesmo **cabeçalho** (logo + menu de navegação +
relógio/saudação) e o mesmo **rodapé** (menu, endereço e direitos autorais).

---

## ⚙️ Funcionalidades em JavaScript

Todo o JavaScript fica em `assets/js/script.js` e **só executa depois que a
página carrega** (`DOMContentLoaded`). Como o site é estático, tudo roda no
navegador, sem servidor.

### Funções temporais (em todas as páginas)
- **Relógio com data e hora**: exibido no cabeçalho e atualizado **a cada
  segundo** (`setInterval`), no formato brasileiro.
- **Saudação por horário**: mostra *"Bom dia"*, *"Boa tarde"* ou *"Boa noite"*
  conforme a hora atual.
- **Ano automático no rodapé**: o ano do `©` é preenchido sozinho com o ano
  corrente (não precisa atualizar à mão todo ano).

### Formulário de cadastro (`cadastro.html`)
- **Máscara de CPF** aplicada enquanto o usuário digita → `000.000.000-00`.
- **Máscara de telefone** enquanto digita → `(00) 00000-0000` (celular) ou
  `(00) 0000-0000` (fixo).
- **Validação no envio** (`submit` + `preventDefault`): confere os campos
  obrigatórios; se algo estiver errado, mostra um aviso vermelho na página.
- **Confirmação visível**: se estiver tudo certo, exibe uma mensagem de sucesso
  personalizada na própria página e **limpa o formulário** (sem usar `alert`).

### Formulário de agendamento (`agendamento.html`)
- **Validação no envio** dos campos obrigatórios (nome, serviço e data).
- **Resumo do agendamento**: ao confirmar, monta e exibe na página um resumo
  com cliente, serviço escolhido, data (convertida para `DD/MM/AAAA`) e
  observações; depois **limpa o formulário**.

---

## ♿ Recursos de acessibilidade

O site foi revisado com foco em pessoas com deficiência visual:

- **Textos alternativos (`alt`)** descritivos em todas as imagens (logo,
  carrossel e produtos) — funcionam como audiodescrição.
- **Idioma da página** declarado em todas as páginas (`<html lang="pt-br">`).
- **Rótulos `<label>`** associados (via `for`/`id`) a todos os campos de
  formulário.
- **Regiões nomeadas com `aria-label`**: navegação principal, navegação do
  rodapé e o carrossel.
- **Link "Pular para o conteúdo"** (skip link) no topo de cada página, que
  aparece ao navegar por teclado e leva direto ao conteúdo principal.
- **Contraste de cores** ajustado para atender ao padrão **WCAG AA** (mínimo
  4.5:1 entre texto e fundo).
- **Foco visível** ao navegar com a tecla **Tab** (contorno destacado nos
  links, botões e campos).

---

## 🎨 Visual e responsividade

- Estilos próprios em `assets/css/styles.css`, com **paleta quente** definida em
  variáveis CSS, tipografia legível, cabeçalho e rodapé estilizados, e **efeito
  hover** em botões e cards.
- **Bootstrap 5** (via CDN) para componentes (carrossel, formulários, grid) e
  responsividade — o layout se adapta ao **celular**.

---

## 🚀 Como abrir / usar o site

### Opção 1 — Abrir direto no navegador
Basta abrir o arquivo **`index.html`** com um duplo clique. A navegação entre as
páginas funciona normalmente.

### Opção 2 — Servidor local (recomendado para testar os caminhos como no GitHub Pages)
No terminal, dentro da pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois acesse no navegador: <http://localhost:8000/index.html>

> **Dica:** para testar a acessibilidade, pressione **Tab** ao abrir uma página —
> o primeiro item em foco é o "Pular para o conteúdo".

---

## 📁 Estrutura de pastas

```
projeto-fase1-petshop/
├── index.html          # Início (carrossel)
├── servicos.html       # Serviços
├── produtos.html       # Produtos
├── cadastro.html       # Cadastro de cliente/pet
├── agendamento.html    # Agendamento de serviços
├── contato.html        # Contato
├── assets/
│   ├── css/styles.css  # Estilos próprios
│   ├── js/script.js    # Funções de JavaScript
│   └── img/            # Imagens (logo e produtos)
└── README.md           # Este arquivo de ajuda
```

---

## 🔗 Links do projeto

> Cole aqui os endereços depois de publicar:

- **Repositório no GitHub:** _<cole aqui o link do repositório>_
- **Site publicado (GitHub Pages):** _<cole aqui o link do GitHub Pages>_

---

Desenvolvido por **Leticia Pinto Chaves**.
