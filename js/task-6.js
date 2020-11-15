/*
 * Напиши скрипт, який би при втраті фокуса на інпут, перевіряв
 * його вміст на правильну кількість символів.

 * Скільки символів має бути в інпут, вказується в його атрибуті data-length.
 * Якщо введена відповідна кількість, то border інпут стає зеленим,
 * якщо неправильне - червоним.
 
 * Для додавання стилів, використовуй CSS-класи valid і invalid.
 */

// const inputRef = document.querySelector('#validation-input');

// inputRef.addEventListener('focus', () => {
//   inputRef.classList.remove('invalid');
//   inputRef.classList.remove('valid');
// });

// inputRef.addEventListener('blur', () => {
//   inputRef.value.length === Number(inputRef.dataset.length)
//     ? inputRef.classList.add('valid')
//     : inputRef.classList.add('invalid');
// });

// З використанням callback-функцій
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('focus', onInputFocus);

inputRef.addEventListener('blur', onInputBlur);

function onInputFocus() {
  inputRef.classList.remove('invalid');
  inputRef.classList.remove('valid');
}

function onInputBlur() {
  inputRef.value.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
