'use strict';

const BASE_PATTERN = ['dog', 'dog', 'dog', 'cat', 'cat', 'dog'];

function shiftLeft(arr) {
  const copy = [...arr];
  const first = copy.shift();
  copy.push(first);
  return copy;
}

function generateRows(rowCount) {
  const rows = [];
  let currentRow = [...BASE_PATTERN];

  for (let i = 0; i < rowCount; i++) {
    rows.push([...currentRow]);
    currentRow = shiftLeft(currentRow);
  }

  return rows;
}

function printTableToConsole(rows) {
  for (const row of rows) {
    console.log(row.join('\t'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tableForm');
  const rowsInput = document.getElementById('rows');
  const errorDiv = document.getElementById('error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    errorDiv.textContent = '';

    const rawValue = rowsInput.value.trim();

    if (rawValue === '') {
      errorDiv.textContent = 'Ошибка! Введите количество строк';
      return;
    }

    const rowCount = Number(rawValue);

    if (isNaN(rowCount)) {
      errorDiv.textContent = 'Ошибка! Введите целое число';
      return;
    }

    if (!Number.isInteger(rowCount)) {
      errorDiv.textContent = 'Ошибка! Введите целое число';
      return;
    }

    if (rowCount < 1) {
      errorDiv.textContent = 'Ошибка! Количество строк должно быть больше 0';
      return;
    }

    const tableRows = generateRows(rowCount);
    printTableToConsole(tableRows);
  });
});