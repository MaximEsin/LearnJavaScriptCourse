// 1 task completed, yes they are the same

// 2 task Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge2(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// 3 task Функция min(a, b)
function min(a, b) {
  return a < b ? a : b;
}
min(2, 5) == 2;
min(3, -1) == -1;
min(1, 1) == 1;

// 4 task Функция pow(x,n)
function pow(x, n) {
  return x ** n;
}
