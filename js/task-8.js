/* Напиши скрипт створення і очищення колекції елементів.
 * Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
 * При натисканні на кнопку Очистити, колекція елементів очищається.

 * Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число.
 * Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

 * Кожен створений div:
 * - Має випадковий rgb колір фону
 * - Розміри найпершого div - 30px на 30px
 * - Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px

 * Створи функцію destroyBoxes(), яка очищає div#boxes.
 */
//==================================================================

// const formRef = document.querySelector('#controls > input');
// const btnRenderRef = document.querySelector('button[data-action="render"]');
// const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
// const boxesContainerRef = document.querySelector('#boxes');

// btnRenderRef.addEventListener('click', () => {
//   const amount = Number(formRef.value);
//   createBoxes(amount);
// });

// btnDestroyRef.addEventListener('click', destroyBoxes);

// let boxWidth = 30;
// let boxHeight = 30;

// function createBoxes(amount) {
//   let newBoxes = [];
//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement('div');

//     // генератор випадкового кольору
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);

//     box.style.backgroundColor = `#${randomColor}`;
//     box.style.width = `${boxWidth}px`;
//     box.style.height = `${boxHeight}px`;

//     // newBoxes.push(box);
//     newBoxes[i] = box;

//     boxWidth += 10;
//     boxHeight += 10;
//   }

//   boxesContainerRef.append(...newBoxes);
// }

// function destroyBoxes() {
//   while (boxesContainerRef.firstChild) {
//     boxesContainerRef.removeChild(boxesContainerRef.firstChild);
//   }

//   boxWidth = 30;
//   boxHeight = 30;
// }
//==================================================================

// посилання на DOM-вузли винесено в об'єкт ref
const ref = {
  form: document.querySelector('#controls > input'),
  btnRender: document.querySelector('button[data-action="render"]'),
  btnDestroy: document.querySelector('button[data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes'),
};

ref.btnRender.addEventListener('click', () => {
  const boxesAmount = ref.form.value;
  createBoxes(boxesAmount);
});

ref.btnDestroy.addEventListener('click', destroyBoxes);

let boxSize = 30;

function createBoxes(amount) {
  let newBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = `#${generateColor()}`;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    // newBoxes.push(box);
    newBoxes[i] = box;
    boxSize += 10;
  }

  ref.boxesContainer.append(...newBoxes);
}

function destroyBoxes() {
  while (ref.boxesContainer.firstChild) {
    ref.boxesContainer.removeChild(ref.boxesContainer.firstChild);
  }

  boxSize = 30;
}

// генератор випадкового кольору
function generateColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
