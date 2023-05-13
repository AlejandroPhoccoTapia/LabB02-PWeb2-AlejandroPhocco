let pDate = document.querySelector('.date');
let pDay = document.querySelector('.day');

const d = new Date();
const todayNumber = d.getDay();
let todayName;

if (todayNumber == 0) {
  todayName = 'Domingo';
} else if (todayNumber == 1) {
  todayName = 'Lunes';
} else if (todayNumber == 2) {
  todayName = 'Martes';
} else if (todayNumber == 3) {
  todayName = 'Miercoles';
} else if (todayNumber == 4) {
  todayName = 'Jueves';
} else if (todayNumber == 5) {
  todayName = 'Viernes';
} else if (todayNumber == 6) {
  todayName = 'Sabado';
}

pDate.innerHTML = 'Fecha de hoy: ' + d;
pDay.innerHTML = 'Hoy es: ' + todayName;
