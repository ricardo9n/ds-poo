// =======================
// MINI TURTLE (COMPATÍVEL COM TURTLESCRIPT)
// =======================

let canvas, ctx;

// estado
let x, y;
let heading; // 0 = norte (cima)
let pen = true;
let scale = 1;
let speed = Infinity;
let visible = true;

// fill
let filling = false;

// =======================
// CORES (CONSTANTES)
// =======================

const BLACK = "black";
const GRAY = "gray";
const SILVER = "silver";
const WHITE = "white";

const PINK = "pink";
const RED = "red";
const ORANGE = "orange";
const COPPER = "#B87333";
const APRICOT = "#FBCEB1";
const GOLD = "gold";
const YELLOW = "yellow";

const UMBER = "#635147";
const BRONZE = "#CD7F32";
const BROWN = "brown";
const DARK_BROWN = "#654321";

const GREEN = "green";
const LIME = "lime";

const BABY_BLUE = "#89CFF0";
const CYAN = "cyan";
const BLUE = "blue";

const VIOLET = "violet";
const PURPLE = "purple";

// =======================
// INIT
// =======================

function initTurtle(canvasId) {
  canvas = document.getElementById(canvasId);
  ctx = canvas.getContext("2d");

  ctx.lineCap = "round";
  ctx.lineWidth = 2;

  resetState();
  clear("white");
}

function resetState() {
  x = canvas.width / 2;
  y = canvas.height / 2;
  heading = 0;
  pen = true;
  scale = 1;
  setColor("black");
}

// =======================
// UTIL
// =======================

function toRad(a) {
  return (a * Math.PI) / 180;
}

// heading: 0 = norte
function dirVector() {
  const rad = toRad(heading);
  return {
    dx: Math.sin(rad),
    dy: -Math.cos(rad),
  };
}

function drawLine(x1, y1, x2, y2) {
  if (pen) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}

// =======================
// MOVIMENTO
// =======================

function fd(d) {
  const v = dirVector();
  const dist = d * scale;

  const nx = x + v.dx * dist;
  const ny = y + v.dy * dist;

  if (pen) {
    if (filling) {
      ctx.lineTo(nx, ny);
    } else {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();
    }
  }

  x = nx;
  y = ny;
}

function bk(d) {
  fd(-d);
}

// =======================
// GIRO
// =======================

function rt(a, radius) {
  if (radius === undefined) {
    heading += a;
  } else {
    arcMove(a, radius, true);
  }
}

function lt(a, radius) {
  if (radius === undefined) {
    heading -= a;
  } else {
    arcMove(a, radius, false);
  }
}

// =======================
// ARC (duas versões)
// =======================

// move em arco (rt/lt com raio)
function arcMove(angle, radius, clockwise) {
  const steps = Math.max(10, Math.abs(angle));
  const stepAngle = angle / steps;
  // const stepLen = (2 * Math.PI * radius * scale) / 360;
  const stepLen = (2 * Math.PI * radius) / 360;

  for (let i = 0; i < steps; i++) {
    if (clockwise) {
      heading += stepAngle;
    } else {
      heading -= stepAngle;
    }
    fd(stepLen);
  }
}

// arc sem mover (gira ao redor do ponto atual)
function arc(angle, radius) {
  ctx.beginPath();

  const radStart = toRad(heading - 90);
  const radEnd = toRad(heading + angle - 90);

  ctx.arc(x, y, radius * scale, radStart, radEnd, angle < 0);

  if (pen) ctx.stroke();

  // atualiza heading
  heading += angle;
}

// =======================
// CANETA
// =======================

function pu() {
  pen = false;
}
function pd() {
  pen = true;
}

// =======================
// COR
// =======================

function setColor(...args) {
  let c;

  if (args.length === 1) {
    c = args[0];
  } else if (args.length === 3 || args.length === 4) {
    const [r, g, b, a = 1] = args;
    c = `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a})`;
  }

  ctx.strokeStyle = c;
  ctx.fillStyle = c;
}

// =======================
// FILL
// =======================

function startFill(...args) {
  if (args.length > 0) {
    setColor(...args);
  }

  filling = true;
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function endFill() {
  ctx.closePath();
  ctx.fill();

  if (pen) ctx.stroke();

  filling = false;
}

// =======================
// POSIÇÃO
// =======================

function setPosition(nx, ny) {
  if (filling) {
    ctx.moveTo(nx, ny);
  } else if (pen) {
    drawLine(x, y, nx, ny);
  }
  x = nx;
  y = ny;
}

function setX(nx) {
  setPosition(nx, y);
}

function setY(ny) {
  setPosition(x, ny);
}

function getX() {
  return x;
}
function getY() {
  return y;
}

// =======================
// HEADING
// =======================

function setHeading(a) {
  heading = a;
}

function getHeading() {
  return heading;
}

// =======================
// ESCALA
// =======================

function setScale(s) {
  scale = s;
}

function getScale() {
  return scale;
}

// =======================
// ESTILO
// =======================

function setWidth(w) {
  ctx.lineWidth = w;
}

// =======================
// CLEAR
// =======================

function clear(...args) {
  let c = "white";

  if (args.length === 1) {
    c = args[0];
  } else if (args.length >= 3) {
    const [r, g, b] = args;
    c = `rgb(${r * 255}, ${g * 255}, ${b * 255})`;
  }

  ctx.fillStyle = c;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  setColor("black");
}

// =======================
// SPEED / WAIT (simplificado)
// =======================

function setSpeed(s) {
  speed = s;
}

// versão simples (bloqueante simulada)
function wait(seconds) {
  const start = Date.now();
  while (Date.now() - start < seconds * 1000) {}
}

// =======================
// VISIBILIDADE
// =======================

function ht() {
  visible = false;
}
function st() {
  visible = true;
}
