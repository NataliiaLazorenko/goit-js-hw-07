/*
 * Напиши скрипт який, при наборі тексту в інпут input#name-input
 * (подія input), підставляє його поточне значення в span#name-output.
 * Якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
 */
//==================================================================

const inputRef = document.querySelector('#name-input');
const greetingTextRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onTextInput);

function onTextInput(event) {
  inputRef.value
    ? (greetingTextRef.textContent = event.target.value)
    : (greetingTextRef.textContent = 'незнайомець');
}
