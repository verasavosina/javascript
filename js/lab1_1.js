'use strict';

function sum(a, b) {
  return a + b;
}

const result = sum(5, 3);
document.getElementById('result').innerHTML = `<strong>${result}</strong>`;
