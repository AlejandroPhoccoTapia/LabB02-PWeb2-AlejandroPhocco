let today = document.querySelector('.today');
let rest = document.querySelector('.rest');

const diaDeArequipa = new Date('2023-08-15');
const hoy = new Date();

let diasRestantes = Math.ceil(
  (diaDeArequipa.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24)
);

today.innerHTML = 'Hoy es: ' + diaDeArequipa;
rest.innerHTML = 'Días restantes: ' + diasRestantes;
