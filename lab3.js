'use strict';

import { fib } from './lab2_module.js';

/**
 * Возвращает дробную часть числа
 * @param {number} num - Исходное число
 * @returns {number} Дробная часть числа
 */
export function getDecimal(num) {
    if (Number.isInteger(num)) return 0;
    const fractional = Math.abs(num) - Math.floor(Math.abs(num));
    if (num < 0) {
        return parseFloat((1 - fractional).toFixed(10));
    }
    return parseFloat(fractional.toFixed(10));
}

/**
 * Нормализует URL, добавляя https:// в начало
 * @param {string} url - Исходный URL
 * @returns {string} Нормализованный URL с https://
 */
export function normalizeUrl(url) {
    let cleanUrl = url.replace(/^https?:\/\//i, '');
    return `https://${cleanUrl}`;
}

/**
 * Проверяет наличие спама в строке (viagra или XXX)
 * @param {string} str - Проверяемая строка
 * @returns {boolean} true, если строка содержит спам, иначе false
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до заданной длины, добавляя многоточие в конце
 * @param {string} str - Исходная строка
 * @param {number} maxlength - Максимальная длина строки
 * @returns {string} Усечённая строка
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Делает первую букву строки заглавной
 * @param {string} str - Исходная строка
 * @returns {string} Строка с заглавной первой буквой
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Преобразует строку с дефисами в camelCase
 * @param {string} str - Исходная строка (например, 'var-test-text')
 * @returns {string} Преобразованная строка в camelCase
 */
export function camelize(str) {
    const parts = str.split('-');
    const result = [parts[0]];
    for (let i = 1; i < parts.length; i++) {
        result.push(ucFirst(parts[i]));
    }
    return result.join('');
}

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая его)
 * @param {number} n - Количество чисел Фибоначчи (натуральное число)
 * @returns {bigint[]} Массив чисел Фибоначчи
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

/**
 * Возвращает новый массив, отсортированный по убыванию, не изменяя исходный
 * @param {number[]} arr - Исходный массив чисел
 * @returns {number[]} Новый массив, отсортированный по убыванию
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений из исходного массива
 * @param {any[]} arr - Исходный массив с возможными повторениями
 * @returns {any[]} Массив уникальных значений
 */
export function unique(arr) {
    return [...new Set(arr)];
}
