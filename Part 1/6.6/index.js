// 1 task Установка и уменьшение значения счётчика
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}

// 2 task Сумма с произвольным количеством скобок
function sum(a) {
  let result = a;

  function f(b) {
    result += b;
    return f;
  }

  f.toString = () => result;

  return f;
}
