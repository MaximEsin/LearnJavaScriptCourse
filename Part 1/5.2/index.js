// 1 task Сумма пользовательских чисел
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert(a + b);

// 2 task Почему 6.35.toFixed(1) == 6.3?
alert((6.35).toFixed(1)); // 6.3

Math.round(6.35 * 10) / 10; // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// 3 task Ввод числового значения
function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

// 4 task Бесконечный цикл по ошибке
let i = 0;
while (i != 10) {
  i += 0.2;
} // 0.2 + 0.2 + 0.2 = 0.6000000000000001

// 5 task Случайное число от min до max
function random(min, max) {
  return min + Math.random() * (max - min);
}

// 6 task Случайное целое число от min до max
function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
