// 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

let btnPlay = document.getElementById("btnPlay"),
  btnPausa = document.getElementById("btnPausa"),
  btnReiniciar = document.getElementById("btnReiniciar"),
  contenedor = document.getElementById("contenedor"),
  h = 0,
  m = 0,
  s = 0,
  mls = 0;

console.log(btnPausa.innerHTML);
console.log(btnPlay.innerHTML);
console.log(btnReiniciar.innerHTML);

btnPlay.addEventListener("click", play);
btnPausa.addEventListener("click", pausa);
btnReiniciar.addEventListener("click", reiniciar);

function ingresarNros() {
  let horas, minutos, segundos, milisegundos;
  mls++;
  if (mls > 99) {
    s++;
    mls = 0;
  }
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  if (h >= 24) {
    h = 0;
  }

  milisegundos = mls;
  segundos = s;
  minutos = m;
  horas = h;

  if (milisegundos < 10) {
    milisegundos = `0${milisegundos}`;
  }

  if (segundos < 10) {
    segundos = `0${segundos}`;
  }

  if (minutos < 10) {
    minutos = `0${minutos}`;
  }

  if (horas < 10) {
    horas = `0${horas}`;
  }

  contenedor.innerHTML = `${horas}:${minutos}:${segundos}.${milisegundos}`;
}

function play() {
  ingresarNros();

  intervaloIniciado = setInterval(ingresarNros, 10);
}
function pausa() {
  alert("Se puso PAUSA");
}
function reiniciar() {
  alert("Se puso REINICIAR");
}
