let input = document.querySelector('.input');
let resultado = document.querySelector('.resultado');

function convertir() {
  let link = input.value;
  const regex = /\/([a-zA-Z0-9-_]+)\/?$/;
  const match = link.match(regex);

  if (match) {
    const codigoSesion = match[1];
    resultado.innerHTML = 'El código es: ' + codigoSesion;
  }
}
