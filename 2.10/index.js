// 1 task if (строка с нулём)
if ("0") {
  alert("Привет");
} // Yes, because "0" is a string, and it's not empty, so it's true

// 2 task Название JavaScript
const name = prompt("Какое «официальное» название JavaScript?", "");
if (name == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

// 3 task Покажите знак числа
const number = prompt("Введите число", "");
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

// 4 task Перепишите 'if' в '?'
let result;
a + b < 4 ? (result = "Мало") : (result = "Много");

// 5 task Перепишите 'if..else' в '?'
let message;
(login = "Сотрудник")
  ? (message = "Привет")
  : (login = "Директор")
  ? (message = "Здравствуйте")
  : (login = "")
  ? (message = "Нет логина")
  : (message = "");
