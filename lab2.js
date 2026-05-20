'use strict';

function pow(x, n) {
    return Math.pow(x, n);
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
    if (n < 0) return 0n;
    if (n === 0 || n === 1) return 1n;
    return BigInt(n) * factorial(n - 1);
}

function fib(n) {
    if (n < 0) return 0n;
    if (n === 0) return 0n;
    if (n === 1) return 1n;
    
    let prev = 0n;
    let curr = 1n;
    
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
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
    const blackSpotSymbol = Symbol.for("blackSpot");
    obj[blackSpotSymbol] = true;
    return obj;
}