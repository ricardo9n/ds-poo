<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Mini Turtle IDE</title>

    <!-- ATIVE DEBUG AQUI -->
    <meta name="debug" content="false" />

    <style>
      body {
        margin: 0;
        display: flex;
        height: 100vh;
        font-family: Arial;
      }

      #editor {
        width: 50%;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #ccc;
      }

      #controls {
        padding: 10px;
        background: #f5f5f5;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      textarea {
        flex: 1;
        width: 100%;
        font-family: monospace;
        font-size: 14px;
        padding: 10px;
        border: none;
        outline: none;
      }

      #divider {
        width: 6px;
        cursor: col-resize;
        background: #ddd;
      }

      #canvasContainer {
        flex: 1;
        display: flex;
      }
      canvas {
        width: 100%;
        height: 100%;
        background: white;
      }
    </style>
  </head>

  <body>
    <div id="editor">
      <div id="controls">
        <button onclick="novo()">New</button>
        <button onclick="executar()">Run</button>
        <button onclick="step()">Step</button>
        <button onclick="download()">Download</button>
        <button onclick="document.getElementById('fileInput').click()">
          Load
        </button>

        <select onchange="carregarExemplo(this.value)">
          <option value="">Exemplos</option>
          <option value="quadrado">Quadrado</option>
          <option value="estrela">Estrela</option>
          <option value="espiral">Espiral</option>
          <option value="circulos">Círculos / Arcos / Fill</option>
        </select>

        <input
          type="file"
          id="fileInput"
          style="display: none"
          onchange="loadFile(event)"
        />
      </div>

      <textarea id="code"></textarea>
    </div>

    <div id="divider"></div>

    <div id="canvasContainer">
      <canvas id="tela"></canvas>
    </div>

    <script src="miniturtle.js"></script>

    <script>
      // =======================
      // DEBUG CONFIG
      // =======================

      const DEBUG =
        document.querySelector('meta[name="debug"]')?.content === "true";

      function log(...args) {
        if (DEBUG) console.log("[IDE]", ...args);
      }

      // =======================
      // STORAGE
      // =======================

      const code = document.getElementById("code");

      code.value = localStorage.getItem("code") || "";

      code.addEventListener("input", () => {
        localStorage.setItem("code", code.value);
      });

      // =======================
      // CANVAS (SEM APAGAR)
      // =======================

      function resizeCanvas() {
        const canvas = tela;

        const temp = document.createElement("canvas");
        temp.width = canvas.width;
        temp.height = canvas.height;
        temp.getContext("2d").drawImage(canvas, 0, 0);

        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        canvas.getContext("2d").drawImage(temp, 0, 0);

        log("resize canvas");
      }

      // =======================
      // EXECUTAR
      // =======================

      function executar() {
        limparErro();

        try {
          resizeCanvas();
          initTurtle("tela");

          log("run");
          new Function(code.value)();
        } catch (e) {
          mostrarErro(e);
        }
      }

      // =======================
      // STEP (CORRIGIDO)
      // =======================

      async function step() {
        limparErro();

        resizeCanvas();
        initTurtle("tela");

        log("step start");

        const delay = (ms) => new Promise((r) => setTimeout(r, ms));

        const comandos = [
          "fd",
          "bk",
          "rt",
          "lt",
          "arc",
          "setColor",
          "setPosition",
          "setX",
          "setY",
        ];

        const originais = {};

        comandos.forEach((nome) => {
          originais[nome] = window[nome];

          window[nome] = async function (...args) {
            log("step:", nome, args);
            originais[nome](...args);
            await delay(120);
          };
        });

        try {
          await new Function(`return (async () => { ${code.value} })()`)();
        } catch (e) {
          mostrarErro(e);
        }

        // restaurar funções
        comandos.forEach((nome) => (window[nome] = originais[nome]));

        log("step end");
      }

      // =======================
      // ERRO
      // =======================

      function mostrarErro(e) {
        console.error(e);

        const match = e.stack?.match(/<anonymous>:(\d+):/);

        if (match) {
          destacarLinha(parseInt(match[1]));
        }

        alert(e.message);
      }

      function destacarLinha(linha) {
        const linhas = code.value.split("\n");

        let inicio = 0;

        for (let i = 0; i < linha - 1; i++) {
          inicio += linhas[i].length + 1;
        }

        const fim = inicio + linhas[linha - 1].length;

        code.focus();
        code.setSelectionRange(inicio, fim);
      }

      function limparErro() {
        code.setSelectionRange(0, 0);
      }

      // =======================
      // EXEMPLOS
      // =======================

      function carregarExemplo(nome) {
        const exemplos = {
          quadrado: `initTurtle("tela");
for (let i = 0; i < 4; i++) {
  fd(100);
  rt(90);
}`,

          estrela: `initTurtle("tela");
for (let i = 0; i < 5; i++) {
  fd(200);
  rt(144);
}`,

          espiral: `initTurtle("tela");
let d = 5;
for (let i = 0; i < 50; i++) {
  fd(d);
  rt(20);
  d += 3;
}`,

          circulos: `initTurtle("tela");

setWidth(2);

// círculos
for(let i=0;i<5;i++){
  setColor(i/5,0,1-i/5);
  arc(360,20 + i*15);
}

// arco decorativo
setColor("red");
rt(90);
arc(180,80);

// preenchimento
setPosition(300,300);
setColor("black");

startFill("orange");

for(let i=0;i<6;i++){
  fd(80);
  rt(60);
}

endFill();`,
        };

        code.value = exemplos[nome] || "";
      }

      // =======================
      // OUTROS
      // =======================

      function novo() {
        if (confirm("Limpar código?")) {
          code.value = "";
          localStorage.setItem("code", "");
        }
      }

      function download() {
        const blob = new Blob([code.value], { type: "text/javascript" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "script.js";
        a.click();
      }

      function loadFile(e) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          code.value = ev.target.result;
          localStorage.setItem("code", code.value);
        };
        reader.readAsText(e.target.files[0]);
      }

      // =======================
      // RESIZE IDE
      // =======================

      let dragging = false;

      divider.onmousedown = () => (dragging = true);
      document.onmouseup = () => (dragging = false);

      document.onmousemove = (e) => {
        if (!dragging) return;

        const p = (e.clientX / window.innerWidth) * 100;

        if (p > 10 && p < 90) {
          editor.style.width = p + "%";
          resizeCanvas();
        }
      };

      // =======================
      // INIT
      // =======================

      window.onresize = resizeCanvas;

      resizeCanvas();
      initTurtle("tela");

      log("IDE pronta");
    </script>
  </body>
</html>
