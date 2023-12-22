// 1 task Последнее значение цикла
let i = 3;

while (i) {
  alert(i--);
} // 1

// 2 task Какие значения выведет цикл while?
let j = 0;
while (++j < 5) alert(j); // 1, 2, 3, 4

let o = 0;
while (o++ < 5) alert(o); // 1, 2, 3, 4, 5

// 3 task Какие значения выведет цикл for?
for (let f = 0; f < 5; f++) alert(f); // 0, 1, 2, 3, 4

for (let x = 0; x < 5; ++x) alert(x); // 0, 1, 2, 3, 4

// 4 task Выведите чётные числа
for (let n = 2; n <= 10; n++) {
  if (n % 2 == 0) {
    alert(n);
  }
}

// 5 task Замените for на while
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// 6 task Повторять цикл, пока ввод неверен
let number;
do {
  number = prompt("Введите число больше 100?", 0);
} while (number <= 100 && number);

// 7 task Вывести простые числа
let num = 10;
qq: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue qq;
  }
  alert(i);
}
