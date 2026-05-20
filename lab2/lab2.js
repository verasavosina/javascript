'use strict';

function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / pow(x, -n);
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

const sumTo = new Function('n', `
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
`);

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function factorial(n) {
  if (n < 0) throw new Error('Факториал определён только для неотрицательных чисел');
  if (n === 0) return 1n;
  return BigInt(n) * factorial(n - 1);
}

function fib(n) {
  if (n === 0) return 0n;
  const absN = Math.abs(n);
  let prev = 0n;
  let curr = 1n;
  for (let i = 2; i <= absN; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  let result = absN === 0 ? 0n : curr;
  if (n < 0 && absN % 2 === 0) {
    result = -result;
  }
  return result;
}

function compare(x) {
  return function(y) {
    if (y > x) return true;
    if (y < x) return false;
    return null;
  };
}

function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

function addBlackSpot(obj) {
  const sym = Symbol.for('blackSpot');
  obj[sym] = true;
  return obj;
}