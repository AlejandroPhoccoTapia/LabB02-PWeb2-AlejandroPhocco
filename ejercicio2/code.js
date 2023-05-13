let input = document.querySelector('.input');
let palabraOriginal = document.querySelector('.palabra-original');
let palabraInvertida = document.querySelector('.palabra-invertida');

function presionar() {
  let palabra = input.value;
  let invertida = '';
  for (i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
  }

  input.value = '';
  palabraOriginal.innerHTML = 'Palabra Original: ' + palabra;
  palabraInvertida.innerHTML = 'Palabra invertida: ' + invertida;
}
