# Banco Comunitário de Soluções Urbanas

## Resumo
- **Projeto:** Plataforma web para cadastro, discussão e votação de problemas e soluções urbanas em Cornélio Procópio.
- **Objetivo:** Estimular participação cidadã e facilitar o diálogo entre população e poder público.
- **Integrante:** Lucas Souza Silva
- **ODS:** 11 – Cidades e Comunidades Sustentáveis
- **Instituição:** Universidade Tecnológica Federal do Paraná (UTFPR)

## Sumário
- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Documentação do Código (por arquivo)](#documentação-do-código-por-arquivo)
- [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
- [Acessibilidade](#acessibilidade)
- [Testes](#testes)
- [Como Executar Localmente](#como-executar-localmente)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Visão Geral
Este repositório contém uma aplicação front-end simples (HTML/CSS, opcionalmente JavaScript) que permite:
- Cadastrar problemas urbanos.
- Sugerir e editar soluções.
- Votar e visualizar ranking de ideias.
O foco é acessibilidade, usabilidade e promover colaboração cidadã.

## Requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari).
- (Opcional) Servidor web local (ex.: Live Server do VS Code, Python SimpleHTTPServer).

## Estrutura de Arquivos
- `index.html` — Página principal: lista de problemas, destaques de soluções e ranking.
- `cadastro.html` — Formulário de cadastro de usuários e envio de soluções.
- `contato.html` — Informações de contato e links úteis.
- `style.css` — Estilos globais e componentes.
- `imagens/` — Imagens ilustrativas (cidade, equipe e propostas).
- `currículos/` — Arquivos ou links de currículos dos integrantes.
- `README.md` — Documentação do projeto (este arquivo).

## Documentação do Código (por arquivo)
- `index.html`
  - **Finalidade:** Apresentar feed de problemas e soluções, posições em ranking, filtros e links para páginas de cadastro/contato.
  - **Estrutura esperada:**
    - Header com navegação semântica (`<header>`, `<nav>`).
    - Main com lista de cards para cada problema/solução (`<main>`, `<article>` ou `<section>`).
    - Cada card deve conter título, descrição curta, tags, contador de votos e botão de votar.
    - Footer com links (currículos, contato, menção UTFPR).
  - **Boas práticas:**
    - Usar elementos semânticos (`h1–h3`, `ul/li`, `button`).
    - Evitar inline styles e scripts; preferir classes e arquivos externos.
    - Incluir atributos aria quando necessário (`aria-label`, `role`).

- `cadastro.html`
  - **Finalidade:** Formulário para cadastro de usuários e submissão de proposta/solução.
  - **Campos recomendados:**
    - Nome (required)
    - Email (required, type="email")
    - Título da proposta (required)
    - Descrição (textarea, required)
    - Categoria/tag (select ou checkbox)
    - Upload de imagem (opcional, aceitar tipos seguros: image/png,image/jpeg)
  - **Validação:**
    - HTML5 (required, pattern, type)
    - Mensagens de erro claras e visíveis ao usuário.
    - Evitar envio de dados sensíveis sem criptografia (não há backend público).
  - **Comportamento JS opcional:**
    - Validar tamanho de arquivo, mostrar pré-visualização antes do envio, limpar formulário após submissão simulada.

- `contato.html`
  - **Finalidade:** Exibir formas de contato, links para órgãos públicos e redes sociais.
  - Incluir formulário simples de contato (nome, email, mensagem) com validação mínima ou apenas informação de e-mail/telefones.

- `style.css`
  - **Finalidade:** Gerenciar identidade visual, tipografia e responsividade.
  - **Recomendações:**
    - Definir variáveis CSS para cores principais e fontes (ex.: `:root { --primary: #... }`).
    - Fornecer contraste adequado para acessibilidade (WCAG AA mínimo).
    - Grid ou flexbox para layout responsivo.
    - Breakpoints comuns: 320px, 480px, 768px, 1024px.
    - **Checklist:**
      - Tamanho de fonte base legível (≥16px).
      - Espaçamento e foco visível (outline) em elementos interativos.

- `imagens/`
  - Organizar por subpastas (ex.: `imagens/propostas`, `imagens/equipe`).
  - Incluir texto alternativo (alt) significativo nas imagens.
  - Otimizar imagens para web (compressão, dimensões apropriadas).

- `currículos/`
  - Incluir PDFs ou links externos dos integrantes.
  - Manter dados pessoais sensíveis fora do repositório público ou anonimizados.

## Padrões de Desenvolvimento
- **HTML:**
  - Usar doctype `<!doctype html>` e meta viewport.
  - Estrutura semântica: header, main, footer, nav.
  - IDs únicos e classes reutilizáveis (BEM opcional).
- **CSS:**
  - Variáveis no `:root` para paleta de cores e tipografia.
  - Evitar `!important`; modularizar por componentes.
- **JavaScript (se houver):**
  - Código modular, sem poluir escopo global.
  - Usar funções puras para lógica simples e manipulação do DOM mínima.
  - Sanitizar entradas ao manipular `innerHTML`.

## Acessibilidade
- Textos alternativos em todas imagens importantes.
- Controle de foco lógico e visível (`tabindex` quando necessário).
- Textos com bom contraste (ferramentas: Lighthouse, aXe).
- Formulários associando `<label>` corretamente e status de erro legíveis via leitor de tela.
- Evitar dependência exclusiva de cor para transmitir informação.

## Testes
- Testes manuais recomendados:
  - Navegação por teclado (Tab).
  - Redução de zoom e tamanhos de fonte.
  - Ferramentas de inspeção de acessibilidade (ex.: Lighthouse).
- **Checklist básico:**
  - Links com href válidos.
  - Botões acionáveis via teclado e touch.
  - Formulários não enviados com campos inválidos.

## Como Executar Localmente
1. Clonar repositório:
   ```bash
   git clone <URL-do-repositório>
   ```
2. Abrir a pasta no VS Code ou navegador.
3. Servir localmente (opcional):
   - Com Live Server (VS Code): clique em "Go Live".
   - Com Python 3:
     - Navegue até a pasta do projeto e execute:
       ```bash
       python -m http.server 8000
       ```
     - Abra `http://localhost:8000` no navegador.
4. Navegue nas páginas: `index.html`, `cadastro.html`, `contato.html`.

## Deploy
- GitHub Pages para sites estáticos: configurar branch `gh-pages` ou usar Pages a partir da branch `main`.
- **Otimizações para deploy:**
  - Minificar CSS/JS (se aplicável).
  - Compressão de imagens.
  - Remover arquivos sensíveis.

## Contribuição
- **Fluxo sugerido:**
  - Fork → branch `feature/<nome>` → commit → pull request.
  - Escrever descrição clara das alterações e testes realizados.
- **Checklist para PR:**
  - Código legível e comentado.
  - Nenhum dado sensível incluído.
  - Atualizar README se houver mudanças na interface ou estrutura.

## Checklist de Segurança e Privacidade
- Não armazenar senhas em texto claro em arquivos do repositório.
- Evitar inserir tokens/keys no código.
- Anonimizar dados pessoais em arquivos públicos.

## Licença
- Adicione uma LICENSE apropriada (ex.: MIT) se desejar permitir uso público. Caso contrário, indicar restrições no README.

## Contato
- **Autor:** Lucas Souza Silva
- **Instituição:** UTFPR
- Para dúvidas e contribuições: incluir email ou link para perfil (substituir por contato real quando disponível).

## Notas Finais
Este README documenta a estrutura e as melhores práticas para manter a base de código consistente, acessível e fácil de manter. Para documentação de alterações, adicionar um CHANGELOG.md ao projeto.
