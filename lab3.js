'use strict';

import { fib } from './lab2_module.js';

export function getDecimal(num) {
    if (Number.isInteger(num)) return 0;
    const fractional = Math.abs(num) - Math.floor(Math.abs(num));
    if (num < 0) {
        return parseFloat((1 - fractional).toFixed(10));
    }
    return parseFloat(fractional.toFixed(10));
}

export function normalizeUrl(url) {
    let cleanUrl = url.replace(/^https?:\/\//i, '');
    return `https://${cleanUrl}`;
}

export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

export function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;
    return str.slice(0, maxlength - 1) + '…';
}

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

export function camelize(str) {
    const parts = str.split('-');
    const result = [parts[0]];
    for (let i = 1; i < parts.length; i++) {
        result.push(ucFirst(parts[i]));
    }
    return result.join('');
}

export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

export function unique(arr) {
    return [...new Set(arr)];
}