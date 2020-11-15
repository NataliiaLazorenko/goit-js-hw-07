/*
 * Лічильник складається зі спана і кнопок, які повинні збільшувати і
 * зменшувати значення лічильника на 1.

 * Створи змінну counterValue, в якій буде зберігається поточне значення лічильника.
 * Створи функції increment і decrement для збільшення і зменшення значення лічильника.
 * Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
 */
//==================================================================

// const htmlValue = document.querySelector('#value');
// const btnDecrement = document.querySelector('button[data-action="decrement"]');
// const btnIncrement = document.querySelector('button[data-action="increment"]');

// btnDecrement.addEventListener('click', decrement);
// btnIncrement.addEventListener('click', increment);

// let counterValue = 0;

// function decrement() {
//   counterValue -= 1;
//   htmlValue.textContent = counterValue;
// }

// function increment() {
//   counterValue += 1;
//   htmlValue.textContent = counterValue;
// }
//==================================================================

// querySelector згруповані в об'єкт, оновлення інтерфейсу винесено у функцію
const ref = {
  htmlValue: document.querySelector('#value'),
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
};

ref.btnDecrement.addEventListener('click', decrement);
ref.btnIncrement.addEventListener('click', increment);

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  render();
}

function increment() {
  counterValue += 1;
  render();
}

function render() {
  ref.htmlValue.textContent = counterValue;
}
