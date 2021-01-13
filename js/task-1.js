/*
 * В HTML є список категорій ul#categories.

 * Напиши скрипт, який виконає наступні операції:
 * - Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
 * - Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і
 *   кількість елементів в категорії (всіх вкладених в нього елементів li).
 
 *   Наприклад, для першої категорії вийде:
 *     Категорія: Тварини
 *     Кількість елементів: 4
*/
//==================================================================

// Варіант 1: пошук елементів через querySelector
const categories = document.querySelectorAll('.item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2');
  console.log(`Категорія: ${categoryTitle.textContent}`);

  const categoryElements = category.querySelectorAll('li');
  console.log(`Кількість елементів: ${categoryElements.length}`);
});
//==================================================================

// Варіант 2 (від Репети):
// // Беремо посилання на батьківський елемент, в якого є властивість children
// const list = document.querySelector('#categories');
// console.log(`У списку ${list.children.length} категорії.`);

// // list.children - це псевдомасив, псевдоколекція html-елементів, у нього немає методу forEach()
// // Потрібно перетворити псевдоколекцію у масив через Array.from() або операцію (...rest)
// const elements = [...list.children];
// elements.forEach(el => {
//   console.log(`Категорія: ${el.firstElementChild.textContent}`);

//   const liElements = el.querySelectorAll('li');
//   console.log(`Кількість елементів: ${liElements.length}`);
// });
