'use strict';


function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPrimesUpTo(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}


function formatPrimes(primes) {
  if (primes.length === 0) {
    return 'Простых чисел в указанном диапазоне нет.';
  }
  return primes.join(', ');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('primeForm');
  const input = document.getElementById('n');
  const errorDiv = document.getElementById('error');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    errorDiv.textContent = '';
    resultDiv.textContent = '';

    const rawValue = input.value.trim();

    if (rawValue === '') {
      errorDiv.textContent = 'Ошибка! Введите число';
      return;
    }

    const n = Number(rawValue);

    if (isNaN(n)) {
      errorDiv.textContent = 'Ошибка! Введите целое число';
      return;
    }

    if (!Number.isInteger(n)) {
      errorDiv.textContent = 'Ошибка! Введите целое число';
      return;
    }

    if (n < 2) {
      errorDiv.textContent = 'Ошибка! Число должно быть больше или равно 2';
      return;
    }

    const primes = getPrimesUpTo(n);
    const formatted = formatPrimes(primes);
    resultDiv.textContent = `Простые числа от 2 до ${n}: ${formatted}`;
  });
});