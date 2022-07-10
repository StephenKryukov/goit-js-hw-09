const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let timer = null;

start.addEventListener('click', startChangeBgColor);
stop.addEventListener('click', stopChangeBgColor);

function startChangeBgColor() {
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  start.disabled = true;
  stop.disabled = false;
}

function stopChangeBgColor() {
  clearInterval(timer);
  start.disabled = false;
  stop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
