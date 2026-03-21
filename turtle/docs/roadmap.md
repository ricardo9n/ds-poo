Boa — agora você está pensando como **projeto de verdade**, não só experimento.
Vou te entregar um plano **executável**, em fases, com prioridades claras e decisões estratégicas.

Sem teoria — isso aqui você consegue seguir.

---

# 🧭 Visão do projeto

Objetivo central:

> Criar uma ferramenta de ensino de programação com Turtle que funcione:

* no navegador (IDE atual)
* no VS Code
* via linha de comando

Sem exigir HTML do aluno.

---

# 🧱 FASE 0 — Consolidação (base sólida)

## Objetivo

Parar de “quebrar” e estabilizar o núcleo.

## Tarefas

* [ ] congelar versão atual da IDE (tag v0.1)
* [ ] separar claramente:

  * `miniturtle.js` (engine)
  * `ide.html` (interface)
* [ ] garantir:

  * fill funcionando
  * scale consistente
  * sem erros JS

## Resultado

👉 base confiável para evoluir

---

# 🧠 FASE 1 — Arquitetura limpa

## Objetivo

Preparar para múltiplos ambientes (browser, VSCode, CLI)

## Tarefas

* [ ] remover dependência implícita de `window`
* [ ] encapsular engine:

```js
createTurtle(canvas)
```

* [ ] evitar globais (`fd`, `rt`) → criar namespace opcional

## Resultado

👉 engine reutilizável (isso é crítico para VSCode)

---

# 🖥️ FASE 2 — IDE HTML (manter e melhorar)

## Objetivo

Manter sua IDE como ambiente didático principal

## Melhorias prioritárias

* [ ] corrigir definitivamente o Step (fila de comandos)
* [ ] adicionar:

  * velocidade
  * pause/continue
* [ ] melhorar erro (linha + mensagem clara)
* [ ] salvar exemplos externos (JSON)

## Resultado

👉 IDE sólida para aula

---

# 🧩 FASE 3 — CLI (execução via console)

## Objetivo

Rodar sem HTML e sem Live Server

## Comando final esperado

```bash
turtle run aula1.js
```

## Tarefas

* [ ] criar pacote npm:

```bash
npm init
```

* [ ] criar comando:

```bash
bin/turtle.js
```

* [ ] template HTML interno:

```html
<script src="miniturtle.js"></script>
<script>
initTurtle("tela");
{{CODE}}
</script>
```

* [ ] abrir automaticamente no navegador

## Resultado

👉 aluno roda código com 1 comando

---

# 🧩 FASE 4 — Extensão VS Code (objetivo principal)

## Objetivo

Execução direta dentro do editor

## UX final

* botão ▶️ “Run Turtle”
* abre painel lateral com canvas

## Tarefas

* [ ] criar extensão:

```bash
yo code
```

* [ ] comando:

```js
turtle.run
```

* [ ] pegar código ativo:

```js
vscode.window.activeTextEditor
```

* [ ] renderizar em WebView

* [ ] injetar:

  * miniturtle.js
  * código do usuário

## Resultado

👉 experiência profissional

---

# 🧪 FASE 5 — Step unificado (IDE + VSCode)

## Objetivo

Mesma engine de execução controlada em todos ambientes

## Estratégia correta

* criar **queue engine única**

```js
turtle.enqueue("fd", args)
```

* executar:

```js
turtle.runQueue({ speed, pause })
```

## Resultado

👉 Step consistente em:

* IDE
* VS Code
* CLI (futuro)

---

# 📦 FASE 6 — Empacotamento (npm)

## Objetivo

Distribuição oficial

## Tarefas

* [ ] publicar:

```bash
npm publish
```

* [ ] permitir:

```js
import { createTurtle } from "miniturtle"
```

## Resultado

👉 reutilização por outros projetos

---

# 🧾 FASE 7 — Licença e legalidade

## Objetivo

Evitar problema futuro

## Verificações

### ✔ Código

* você escreveu tudo? → ✔ sim
* sem cópia direta → ✔

### ✔ Inspiração

* Codeheart → conceitual (ok)
* Turtle/Logo → domínio público

👉 você NÃO “roubou” nada

---

## Escolha de licença

Recomendação:

### MIT (mais simples)

* permite uso livre
* mantém crédito

Alternativa:

* Apache 2.0 (se quiser proteção maior)

---

# 🏷️ FASE 8 — Nome do projeto

Você já tem:

👉 **MiniTurtle.js** (bom)

Mas pense em evolução:

Opções:

* MiniTurtle
* TurtleLab
* TurtleIDE
* EduTurtle
* TurtleJS

👉 recomendação:
**MiniTurtle** (mantém simples e didático)

---

# 📣 FASE 9 — Divulgação

## Objetivo

Validar com comunidade

## Ações

* [ ] GitHub público com README
* [ ] GIF demo (muito importante)
* [ ] postar em:

  * Reddit (r/learnprogramming)
  * LinkedIn (educação)
  * grupos de professores

## Pitch simples

> “Turtle Graphics moderno para ensino com JavaScript + VS Code”

---

# 🧭 Roadmap resumido

1. estabilizar base
2. separar engine
3. manter IDE
4. criar CLI
5. criar extensão VSCode
6. unificar step
7. publicar npm
8. divulgar

---

# 💥 Decisão crítica (a mais importante)

👉 NÃO complique cedo demais

Você NÃO precisa agora:

* parser
* AST
* linguagem própria

👉 seu diferencial é:

> simplicidade + controle didático

---

# 🧠 Leitura final (honesta)

Você já saiu de:

* script

E está em:

* ferramenta educacional

👉 Se executar esse plano:

> você chega num projeto publicável de verdade

---

Se quiser, próximo passo mais inteligente:

👉 eu te guio na criação da **CLI funcional em 30–60 minutos** (primeiro passo real)
