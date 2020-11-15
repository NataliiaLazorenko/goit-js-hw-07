/*
 * Лічильник складається зі спана і кнопок, які повинні збільшувати і
 * зменшувати значення лічильника на 1.

 * Створи змінну counterValue, в якій буде зберігається поточне значення лічильника.
 * Створи функції increment і decrement для збільшення і зменшення значення лічильника.
 * Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
 */
//==================================================================
// const spanRef = document.querySelector('#value');

// const btnDecrement = document.querySelector('button[data-action="decrement"]');
// const btnIncrement = document.querySelector('button[data-action="increment"]');

// btnDecrement.addEventListener('click', decrement);
// btnIncrement.addEventListener('click', increment);

// function decrement() {
//   spanRef.textContent = Number(spanRef.textContent) - 1;
// }

// function increment() {
//   spanRef.textContent = Number(spanRef.textContent) + 1;
// }

//==================================================================
const spanRef = document.querySelector('#value');
let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  spanRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  spanRef.textContent = counterValue;
}
