'use strict';
function askForNumber() {
  while (true) {
    const input = prompt('Введите число, большее 100:');

    if (input === null) {
      return false;
    }

    const number = Number(input);

    if (!isNaN(number) && number > 100) {
      return true;
    }
    alert('Ошибка! Нужно ввести число больше 100.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('mainLink');

  link.addEventListener('click', (event) => {
    const isNumberAccepted = askForNumber();

    if (isNumberAccepted) {
      return true;
    } else {
      const isConfirmed = confirm('Вы не ввели число. Всё равно перейти?');
      if (!isConfirmed) {
        event.preventDefault();
      }
    }
  });
});