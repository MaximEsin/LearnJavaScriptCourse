// 1 task Деструктурирующее присваивание
let user = { name: "John", years: 30 };

let { name: name, years: age, isAdmin: isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

// 2 task Максимальная зарплата
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  if (!salaries) {
    return null;
  }
  Object.entries(salaries).reduce((max, [name, salary]) => {
    if (max.salary < salary) {
      max = { name, salary };
    }
    return max;
  });
}
