'use strict';

const MALE_RETIREMENT = 65;
const FEMALE_RETIREMENT = 60;
const WORK_START = 18;
const PRE_RETIREMENT_START_MALE = 60;
const PRE_RETIREMENT_END_MALE = 64;
const PRE_RETIREMENT_START_FEMALE = 55;
const PRE_RETIREMENT_END_FEMALE = 59;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('pensionForm');
  const ageInput = document.getElementById('age');
  const resultArea = document.getElementById('result');
  const ageError = document.getElementById('ageError');
  const genderError = document.getElementById('genderError');

  function clearErrors() {
    ageError.textContent = '';
    genderError.textContent = '';
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();

    const age = parseInt(ageInput.value, 10);
    const gender = document.querySelector('input[name="gender"]:checked');

    if (isNaN(age) || ageInput.value.trim() === '') {
      ageError.textContent = 'Ошибка! Не указан возраст';
      return;
    }

    if (age < 0) {
      ageError.textContent = 'Ошибка! Возраст не может быть отрицательным';
      return;
    }

    if (!gender) {
      genderError.textContent = 'Ошибка! Не указан пол';
      return;
    }

    const genderValue = gender.value;
    let message = '';

    if (age <= 17) {
      message = 'Вам пока рано работать';
    }
    else if (genderValue === 'male' && age >= WORK_START && age <= MALE_RETIREMENT - 1) {
      if (age >= PRE_RETIREMENT_START_MALE && age <= PRE_RETIREMENT_END_MALE) {
        message = 'Скоро пенсия!';
      } else {
        message = 'Вам ещё работать и работать';
      }
    }
    else if (genderValue === 'female' && age >= WORK_START && age <= FEMALE_RETIREMENT - 1) {
      if (age >= PRE_RETIREMENT_START_FEMALE && age <= PRE_RETIREMENT_END_FEMALE) {
        message = 'Скоро пенсия!';
      } else {
        message = 'Вам ещё работать и работать';
      }
    }
    else if (genderValue === 'male' && age >= MALE_RETIREMENT) {
      message = 'Вам пора на пенсию';
    }
    else if (genderValue === 'female' && age >= FEMALE_RETIREMENT) {
      message = 'Вам пора на пенсию';
    }

    resultArea.value = message;
  });

  form.addEventListener('reset', () => {
    setTimeout(() => {
      resultArea.value = '';
      clearErrors();
    }, 0);
  });
});