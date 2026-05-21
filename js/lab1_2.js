'use strict';

function getCrowsWord(count) {
  const lastTwo = Math.abs(count) % 100;
  const lastOne = lastTwo % 10;

  if (lastTwo >= 11 && lastTwo <= 14) {
    return 'ворон';
  }

  switch (lastOne) {
    case 1:
      return 'ворона';
    case 2:
    case 3:
    case 4:
      return 'вороны';
    default:
      return 'ворон';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('num');
  const errorDiv = document.getElementById('numError');
  const button = document.getElementById('countBtn');
  const form = document.getElementById('crowsForm'); // Лучше直接用ID

  function handleSubmit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    
    errorDiv.textContent = '';

    let rawValue = input.value.trim();
    if (rawValue === '') {
      errorDiv.textContent = 'Ошибка! Введите число';
      return;
    }

    const num = Number(rawValue);
    if (isNaN(num)) {
      errorDiv.textContent = 'Ошибка! Введите целое число';
      return;
    }

    if (!Number.isInteger(num)) {
      errorDiv.textContent = 'Ошибка! Количество ворон должно быть целым числом';
      return;
    }

    const word = getCrowsWord(num);
    alert(`На ветке сидит ${num} ${word}`);
  }

  button.addEventListener('click', handleSubmit);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleSubmit();
  });
});
