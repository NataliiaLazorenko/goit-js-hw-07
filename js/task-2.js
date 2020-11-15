/*
 * В HTML є пустий список ul#ingredients.
 * В JS є масив рядків ingredients.

 * Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію
 * в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().
*/
//==================================================================

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
//==================================================================

// варіант 1: з контейнером для елементів списку
// const containerRef = document.createElement('div');

// const ingredient = ingredients.forEach(ingredient => {
//   const ingredientRef = document.createElement('li');
//   ingredientRef.textContent = ingredient;

//   containerRef.append(ingredientRef);
// });

// const ingredientsListRef = document.querySelector('#ingredients');
// ingredientsListRef.append(containerRef);
//==================================================================

// варіант 2: без контейнера для елементів списку
// const ingredientsList = ingredients.map(ingredient => {
//   const ingredientRef = document.createElement('li');
//   ingredientRef.textContent = ingredient;

//   return ingredientRef;
// });

// const ingredientsListRef = document.querySelector('#ingredients');
// ingredientsListRef.append(...ingredientsList);
//==================================================================

// варіант 3: через функцію і без контейнера для елементів списку
const createIngredient = ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;

  return ingredientRef;
};

const ingredientsList = ingredients.map(ingredient =>
  createIngredient(ingredient),
);

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...ingredientsList);
