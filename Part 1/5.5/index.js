// 1 task Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

// 2 task Фильтрация по диапазону
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

// 3 task Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// 4 task Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

// 5 task Скопировать и отсортировать массив
let arrr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arrr);

alert(sorted); // CSS, HTML, JavaScript
alert(arrr); // HTML, JavaScript, CSS (без изменений)

// 6 task Создать расширяемый калькулятор
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

// 7 task Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

alert(names); // Вася, Петя, Маша

// 8 task Трансформировать в объекты
let vasyaa = { name: "Вася", surname: "Пупкин", id: 1 };
let petyaa = { name: "Петя", surname: "Иванов", id: 2 };
let mashaa = { name: "Маша", surname: "Петрова", id: 3 };

let userss = [vasyaa, petyaa, mashaa];

let usersMapped = userss.map((user) => {
  return {
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  };
});

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

// 9 task Отсортировать пользователей по возрасту
let vasyaaa = { name: "Вася", age: 25 };
let petyaaa = { name: "Петя", age: 30 };
let mashaaa = { name: "Маша", age: 28 };

let arrrr = [vasyaaa, petyaaa, mashaaa];

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(arrrr);

// теперь: [vasya, masha, petya]
alert(arrrr[0].name); // Вася
alert(arrrr[1].name); // Маша
alert(arrrr[2].name); // Петя

// 10 task Перемешайте массив
let arra = [1, 2, 3];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(arra);
// arra = [3, 2, 1]

shuffle(arra);
// arra = [2, 1, 3]

shuffle(arra);
// arra = [3, 1, 2]

// 11 task Получить средний возраст
let vvasya = { name: "Вася", age: 25 };
let pvetya = { name: "Петя", age: 30 };
let mvasha = { name: "Маша", age: 29 };

let avrr = [vvasya, pvetya, mvasha];

function getAverageAge(avrr) {
  return avrr.reduce((prev, user) => prev + user.age, 0) / avrr.length;
}

alert(getAverageAge(avrr)); // (25 + 30 + 29) / 3 = 28

// 12 task Оставить уникальные элементы массива
function unique(arr) {
  let result = [];
  strings.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(unique(strings)); // кришна, харе, :-O

// 13 task Создайте объект с ключами из массива
let usersss = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(usersss);

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
