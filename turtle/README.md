# MiniTurtle.js

AINDA NÃO ESTÁ FUNCIONAL!

Uma implementação simples de **Turtle Graphics em JavaScript**, voltada para ensino de programação introdutória.

Este projeto foi criado com foco didático, permitindo trabalhar conceitos fundamentais como:

- sequência de comandos
- orientação espacial
- decomposição de problemas
- construção incremental de soluções

Tudo isso **sem exigir conhecimento prévio de JavaScript**.

---

## Motivação

Este projeto surgiu a partir do uso do ambiente:

https://casual-effects.com/codeheart/turtle/

em aulas de *Introdução à Programação*.

Embora esse ambiente seja excelente para iniciantes, ele:

- não é facilmente integrável ao VSCode
- não pode ser reutilizado como biblioteca
- limita a evolução para um ambiente mais próximo do desenvolvimento real

O MiniTurtle resolve isso criando uma alternativa:

- simples
- controlável
- extensível
- integrada ao fluxo de desenvolvimento com HTML + JavaScript

---

## Objetivos

- reproduzir os principais comandos do TurtleScript
- manter compatibilidade conceitual com o ambiente original
- permitir evolução gradual para JavaScript real
- servir como base para experimentação e ensino

---

## Estrutura do projeto

```

miniturtle/
│
├── index.html        # arquivo principal (uso)
└── miniturtle.js     # biblioteca

````

---

## Como usar

1. Abra o arquivo `index.html` no navegador
2. Escreva comandos Turtle no script
3. Atualize a página para executar

Exemplo:

```javascript
initTurtle("tela");

setColor("blue");

for (let i = 0; i < 4; i++) {
    fd(100);
    rt(90);
}
````

---

## Comandos disponíveis

### Movimento

* `fd(distance)`
* `bk(distance)`

### Rotação

* `rt(angle)`
* `rt(angle, radius)`
* `lt(angle)`
* `lt(angle, radius)`

### Arcos

* `arc(angle, radius)`

### Caneta

* `pu()`
* `pd()`

### Cor

* `setColor(color)`
* `setColor(r, g, b)`
* `setColor(r, g, b, a)`

### Preenchimento

* `startFill(color)`
* `startFill(r, g, b)`
* `startFill(r, g, b, a)`
* `endFill()`

### Posição

* `setPosition(x, y)`
* `setX(x)`
* `setY(y)`
* `getX()`
* `getY()`

### Direção

* `setHeading(degrees)`
* `getHeading()`

> Sistema de orientação:
>
> * 0° = norte (cima)
> * 90° = leste (direita)
> * 180° = sul
> * 270° = oeste

### Estilo

* `setWidth(width)`

### Escala

* `setScale(s)`
* `getScale()`

### Controle

* `clear(color)`
* `wait(seconds)`
* `setSpeed(speed)`

### Visibilidade

* `ht()` (hide turtle)
* `st()` (show turtle)

---

## Exemplo

```javascript
clear("white");

setColor("red");

for (let i = 0; i < 4; i++) {
    fd(100);
    rt(90);
}

setColor("blue");
arc(360, 50);
```

---

## Observações didáticas

Este projeto foi projetado para:

* permitir que alunos iniciem sem conhecer variáveis ou estruturas de controle
* introduzir gradualmente conceitos como repetição (`for`)
* facilitar a transição para programação real

Uma decisão importante foi manter:

* comandos simples (`fd`, `rt`, etc.)
* comportamento previsível
* baixo acoplamento com frameworks

---

## Limitações atuais

* `wait()` é bloqueante (não ideal para animações)
* `setSpeed()` ainda não controla execução real
* não há sistema de fila de comandos
* não há parser para `repeat {}` (usa-se `for` do JavaScript)

---

## Possíveis evoluções

* execução passo a passo
* animação controlada
* editor embutido no navegador
* sistema de exercícios automatizados
* visualização da tartaruga (cursor)

---

## Inspiração

Este projeto foi diretamente inspirado por:

* TurtleScript do Codeheart
  [https://casual-effects.com/codeheart/turtle/](https://casual-effects.com/codeheart/turtle/)

Também se baseia no conceito clássico de:

* Turtle Graphics (Logo / Papert)
  [https://en.wikipedia.org/wiki/Turtle_graphics](https://en.wikipedia.org/wiki/Turtle_graphics)

---

## Licença

Este projeto é livre para uso educacional e adaptação.

---

## Autor

Projeto desenvolvido para apoio didático em disciplinas de programação.
