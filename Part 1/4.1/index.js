// 1 task Привет, object
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 2 task Проверка на пустоту
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

// 3 task Объекты-константы?
const user = {
  name: "John",
};

// это будет работать?
user.name = "Pete"; // да

// 4 task Сумма свойств объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sum = (obj) => {
  let result = 0;
  for (let key in obj) {
    result += obj[key];
  }
  return result;
};
sum(salaries);

// 5 task Умножаем все числовые свойства на 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);
