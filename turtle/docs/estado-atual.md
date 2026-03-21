# Estado Atual — MiniTurtle.js

Este documento descreve o estado atual do projeto para facilitar retomada futura.

---

## Versão atual

v0.1 (pré-estabilização)

---

## Estrutura

- miniturtle.js → engine principal
- index.html → IDE no navegador

---

## Funcionalidades implementadas

### Engine

- movimento:
  - fd, bk

- rotação:
  - rt, lt
  - suporte a arco com raio

- arco:
  - arc(angle, radius)

- caneta:
  - pu, pd

- cor:
  - setColor (string + RGB)

- preenchimento:
  - startFill / endFill (funcional, mas sensível a uso)

- posição:
  - setPosition, setX, setY
  - getX, getY

- direção:
  - setHeading, getHeading

- escala:
  - setScale, getScale (funcional, já corrigido)

- estilo:
  - setWidth

- controle:
  - clear
  - wait (bloqueante)
  - setSpeed (não funcional ainda)

- visibilidade:
  - ht, st

---

### IDE

- editor com textarea
- execução via botão Run
- execução Step (com limitações)
- exemplos prontos
- load / download
- autosave com localStorage
- canvas redimensionável
- preserva desenho ao redimensionar
- highlight de erro (linha)

---

## Problemas conhecidos

### Step

- implementação atual baseada em async/await
- não funciona corretamente com loops
- não há controle real de execução

### Execução

- uso de new Function (ok para ensino, mas limitado)

### Fill

- depende de uso correto (shape fechado)
- pode gerar comportamento inesperado em casos complexos

### Scale

- corrigido recentemente
- precisa validação em diferentes cenários

### Canvas

- redimensionamento pode distorcer levemente

---

## Limitações

- não há:
  - controle de velocidade real
  - pause/continue
  - fila de execução
  - debug estruturado

- editor simples (sem syntax highlight)

- dependência implícita de ambiente browser

---

## Decisões já aplicadas

- manter API simples (fd, rt)
- não usar parser
- não usar frameworks
- foco em ensino

---

## Próximos passos imediatos

1. estabilizar engine
2. corrigir Step com fila de comandos
3. separar engine de interface
4. preparar CLI

---

## Riscos

- complexidade crescente no Step
- acoplamento com DOM
- perda de simplicidade se evoluir rápido demais

---

## Estado geral

- funcional para uso em sala
- ainda instável para distribuição
- arquitetura já permite evolução

---

## Avaliação

O projeto já cumpre seu objetivo didático inicial.

Próxima fase:

> transformar em ferramenta consistente e reutilizável