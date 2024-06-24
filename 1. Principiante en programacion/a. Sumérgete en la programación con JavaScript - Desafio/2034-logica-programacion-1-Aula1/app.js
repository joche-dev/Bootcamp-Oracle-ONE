//VARIABLES
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 0;
let intentos = 1;
let intentosMaximo = 10;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(
    prompt(`Ingresa un número entre 1 y ${numeroMaximo}  por favor:`)
  );

  if (numeroUsuario == numeroSecreto) {
    alert(
      `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${
        intentos == 1 ? 'vez.' : 'veces.'
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert('El número secreto es menor!');
    } else {
      alert('El número secreto es mayor!');
    }

    intentos++;

    if (intentos > intentosMaximo) {
      alert(`Llegaste al número máximo de ${intentosMaximo} intentos 😥.`);
      break;
    }

  }
}
