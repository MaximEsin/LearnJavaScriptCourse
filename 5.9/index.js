// 1 task Сумма свойств объекта
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  let sum = 0;
  for (let salary of Object.values(obj)) {
    sum += salary;
  }

  return sum; // 650
}

alert(sumSalaries(salaries)); // 650

// 2 task Подсчёт количества свойств объекта
let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

alert(count(user)); // 2
