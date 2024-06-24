let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.')
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function limpiarInput() {
  document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroSecreto === numeroUsuario) {
    asignarTextoElemento(
      'p',
      `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}.`
    );
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor.');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor.');
    }
    intentos++;
    limpiarInput();
  }
  return;
}

function reiniciarJuego() {
  limpiarInput();
  condicionesIniciales();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
