// 1 task Скрыть элемент по нажатию кнопки
const div = document.querySelector("#text");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  div.style.display = "none";
});

// 2 task Спрятать себя
const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  btn.style.display = "none";
});

// 3 task Какой обработчик запустится?
button.addEventListener("click", () => alert("1")); // сработает

button.removeEventListener("click", () => alert("1")); // удаляется другая функция

button.onclick = () => alert(2); // сработает

// 4 task Передвиньте мяч по полю
function moveAt(ball, field) {
  ball.style.left = field.clientX - ball.offsetWidth / 2 + "px";
  ball.style.top = field.clientY - ball.offsetHeight / 2 + "px";
}

// 5 task Создать раскрывающееся меню
const menu = document.querySelector(".menu");
const title = document.querySelector(".title");

function toggleMenu() {
  menu.classList.toggle("menu-active");
}

// 6 task Добавить кнопку закрытия
function addCloseButton(block) {
  const button = document.createElement("button");
  button.classList.add("close-button");
  button.innerHTML = "X";
  block.append(button);
}

// 7 task Карусель
// This is mainly html/css task, i will skip it
