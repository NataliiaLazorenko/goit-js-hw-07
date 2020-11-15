/* Напиши скрипт для створення галереї зображень по масиву даних.

 * В HTML є список ul#gallery.
 * Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки
 * і insertAdjacentHTML().

 * Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
 * Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.
 */
//==================================================================

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
//==================================================================

// Варіант 1: створення розмітки через createElement
// const galleryItems = images.map(image => {
//   const galleryItemRef = document.createElement('li');
//   galleryItemRef.classList.add('gallery-list-item');

//   const imageRef = document.createElement('img');
//   imageRef.src = image.url;
//   imageRef.alt = image.alt;

//   galleryItemRef.append(imageRef);
//   return galleryItemRef;
// });

// const galeryListRef = document.querySelector('#gallery');
// galeryListRef.append(...galleryItems);
//==================================================================

// Варіант 2: через функцію та createElement()
// const createGalleryItem = image => {
//   const galleryItemRef = document.createElement('li');
//   galleryItemRef.classList.add('gallery-list-item');

//   const imageRef = document.createElement('img');
//   imageRef.src = image.url;
//   imageRef.alt = image.alt;

//   galleryItemRef.append(imageRef);
//   return galleryItemRef;
// };

// const galleryItems = images.map(image => createGalleryItem(image));

// const galeryListRef = document.querySelector('#gallery');
// galeryListRef.append(...galleryItems);
//==================================================================

// Варіант 3: через шаблонні рядки та insertAdjacentHTML()
const galeryListRef = document.querySelector('#gallery');

const galleryItems = images.reduce(
  (string, image) =>
    string +
    `<li class="gallery-list-item">
    <img src=${image.url} alt=${image.alt}>
    </li>`,
  '',
);

galeryListRef.insertAdjacentHTML('afterbegin', galleryItems);
//==================================================================

// Варіант 4: створення розмітки винесено у функцію
// const galeryListRef = document.querySelector('#gallery');

// const createGalleryItem = image => {
//   const galleryItem =
//   `<li class="gallery-list-item">
//   <img src=${image.url} alt=${image.alt}>
//   </li>`;
//   return galleryItem;
// };

// const galleryItems = images.reduce(
//   (string, image) => string + createGalleryItem(image),
//   '',
// );

// galeryListRef.insertAdjacentHTML('afterbegin', galleryItems);
