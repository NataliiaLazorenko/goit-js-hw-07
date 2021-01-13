## Завдання 1

В HTML є список категорій `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Тварини</h2>

    <ul>
      <li>Кіт</li>
      <li>Хом'як</li>
      <li>Кінь</li>
      <li>Папуга</li>
    </ul>
  </li>
  <li class="item">
    <h2>Продукти</h2>

    <ul>
      <li>Хліб</li>
      <li>Петрушка</li>
      <li>Сир</li>
    </ul>
  </li>
  <li class="item">
    <h2>Технології</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </li>
</ul>
```

Напиши скрипт, який виконає наступні операції:

- Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто
елементів `li.item`. Вийде `'У списку 3 категорії.'`.

- Для кожного елемента `li.item` в списку `ul#categories`, знайде і виведе в
консоль текст заголовка елемента (тега h2) і кількість елементів в категорії
(всіх вкладених в нього елементів `li`).

Наприклад, для першої категорії вийде:

- Категорія: Тварини
- Кількість елементів: 4

## Завдання 2

В HTML є пустий список `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

В JS є масив рядків.

```js
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
```

Напиши скрипт, який для кожного елемента масиву `ingredients` створить
окремий `li`, після чого вставить всі `li` за одну операцію в список
`ul.ingredients`. Для створення DOM-вузлів використовуй `document.createElement()`.

## Завдання 3

Напиши скрипт для створення галереї зображень по масиву даних.

В HTML є список `ul#gallery`.

```html
<ul id="gallery"></ul>
```

Використовуй масив об'єктів `images` для створення тегів `img` вкладених в `li`.
Для створення розмітки використовуй шаблонні рядки і `insertAdjacentHTML()`.

- Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
- Додай мінімальне оформлення галереї флексбоксами або грід через
  css-класи.

```js
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
```

## Завдання 4

Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати
значення лічильника на `1`.

- Створи змінну `counterValue`, в якій буде зберігається поточне значення
  лічильника.
- Створи функції `increment` і `decrement` для збільшення і зменшення значення
  лічильника.
- Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу.

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

## Завдання 5

Напиши скрипт який, при наборі тексту в інпут `input#name-input` (подія
input), підставляє його поточне значення в `span#name-output`. Якщо інпут
порожній, в спані повинен відображатися рядок `'незнайомець'`.

```html
<input type="text" placeholder="Ваше ім'я?" id="name-input" />
<h1>Привіт, <span id="name-output">незнайомець</span>!</h1>
```

## Завдання 6

Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст
на правильну кількість символів.

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символів"
/>
```

- Скільки символів має бути в інпут, вказується в його атрибуті
  `data-length`.
- Якщо введена відповідна кількість, то `border` інпут стає зеленим,
  якщо неправильне - червоним.

Для додавання стилів, використовуй CSS-класи `valid` і `invalid`.

```css
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

## Завдання 7

Напиши скрипт, який реагує на зміну значення `input#font-size-control`
(подія input) і змінює інлайн-стиль `span#text` оновлюючи властивість
`font-size`. В результаті при перетягуванні повзунка змінюватиметься розмір
тексту.

```html
<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
```

## Завдання 8 - додаткове, виконувати не обов'язково

Напиши скрипт створення і очищення колекції елементів. Користувач вводить
кількість елементів в `input` і натискає кнопку `Створити`, після чого
рендериться колекція. При натисканні на кнопку `Очистити`, колекція елементів
очищається.

Створи функцію `createBoxes(amount)`, яка приймає 1 параметр `amount` -
число. Функція створює стільки `div`, скільки вказано в `amount` і додає їх
в `div#boxes`.

Кожен створений div:

- Має випадковий rgb колір фону
- Розміри найпершого div - 30px на 30px
- Кожен наступний div після першого, повинен бути ширше і вище попереднього на
  10px

Створи функцію `destroyBoxes()`, яка очищає `div#boxes`.

```html
<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Створити</button>
  <button type="button" data-action="destroy">Очистити</button>
</div>

<div id="boxes"></div>
```
