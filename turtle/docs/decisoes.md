# Decisões de Projeto — MiniTurtle.js

Este documento registra decisões importantes para manter consistência no desenvolvimento.

---

## Filosofia geral

- foco em ensino introdutório
- simplicidade acima de completude
- comportamento previsível
- evitar abstrações complexas desnecessárias

---

## API da Turtle

- manter comandos curtos e didáticos:
  - fd, rt, lt, bk
- evitar sintaxe orientada a objeto (ex: turtle.forward)
- manter compatibilidade conceitual com Turtle clássico (Logo / Codeheart)

---

## Linguagem

- utilizar JavaScript nativo
- NÃO criar linguagem própria (sem parser ou DSL customizada)
- usar estruturas JS padrão (`for`, `if`)

---

## Execução

- execução direta via `new Function`
- evitar AST ou parsing neste estágio
- aceitar limitações em troca de simplicidade

---

## Step (execução passo a passo)

- NÃO executar linha a linha
- utilizar interceptação de comandos (fd, rt, etc.)
- foco em visualização didática, não debug preciso

---

## IDE

- manter versão HTML simples
- usar textarea (sem dependências externas)
- evitar frameworks (React, Vue, etc.)

---

## Persistência

- usar localStorage para salvar código automaticamente
- evitar backend neste momento

---

## Arquitetura

- separar:
  - engine (miniturtle.js)
  - interface (IDE HTML / VSCode / CLI)

- evitar dependência direta de window no futuro

---

## Integração futura

- suportar execução em:
  - navegador (IDE)
  - VS Code (WebView)
  - CLI (Node + browser)

---

## Dependências

- evitar dependências externas sempre que possível
- manter projeto leve e portátil

---

## Licença

- intenção de uso educacional
- preferência por licença MIT

---

## Inspiração

- Turtle Graphics (Logo)
- Codeheart TurtleScript

Decisão:
- inspiração conceitual apenas
- nenhuma cópia direta de código

---

## Não objetivos (importante)

- não competir com engines gráficas
- não ser framework de canvas
- não suportar todos os casos de uso possíveis

---

## Direção do projeto

Este projeto deve evoluir como:

> ferramenta educacional simples, controlada e extensível

e não como biblioteca genérica complexa.