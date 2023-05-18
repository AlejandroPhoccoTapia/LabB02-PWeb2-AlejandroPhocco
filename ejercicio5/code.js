let size = document.querySelector('.size');
let table = document.querySelector('.table');

function generateTable() {
  let tableSize = size.value;
  let tableHTML = '<table>';

  for (let i = 1; i <= tableSize; i++) {
    tableHTML += `<tr><td>Valor ${i}: </td><td><input type='number' class='tableValue' />`;
  }
  tableHTML += '</table>';
  tableHTML += '<button onclick="calculateSum()">Calcular Suma</button>';

  table.innerHTML = tableHTML;
}
