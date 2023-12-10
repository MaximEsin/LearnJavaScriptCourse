// 1 task Что выведет alert (ИЛИ)?
alert(null || 2 || undefined); // 2

// 2 task Что выведет alert (ИЛИ)?
alert(alert(1) || 2 || alert(3)); // 1, 2

// 3 task Что выведет alert (И)?
alert(1 && null && 2); // null

// 4 task Что выведет alert (И)?
alert(alert(1) && alert(2)); // 1

// 5 task Что выведет этот код?
alert(null || (2 && 3) || 4); // 3

// 6 task Что выведет этот код (||=, &&=)?
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value); // 30

// 7 task Проверка значения из диапазона
if (age >= 14 && age <= 90) {
}

// 8 task Проверка значения вне диапазона
if (!(age >= 14 && age <= 90)) {
}

if (age < 14 || age > 90) {
}

// 9 task Вопрос об "if"
if (-1 || 0) alert("first"); // выполнится
if (-1 && 0) alert("second"); // не выполнится
if (null || (-1 && 1)) alert("third"); // выполнится

// 10 task Проверка логина
let userName = prompt("Кто там?", "");
if (userName === "Админ") {
  let pass = prompt("Пароль?", "");
  if (pass === "Я главный") {
    alert("Здравствуйте!");
  } else if (pass === null || pass === "") {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName === null || userName === "") {
  alert("Отменено");
}
