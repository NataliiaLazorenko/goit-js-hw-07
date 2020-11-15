/*
 * Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
 * і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
 * В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
 */
const inputRangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', event => {
  const textSize = 12 + event.target.valueAsNumber;
  textRef.style.fontSize = `${textSize}px`;
});
