// 1 task Проверьте MAC-адрес
let regexp = /(\d{2}:){5}\w{2}/;

alert(regexp.test("01:32:54:67:89:AB")); // true

alert(regexp.test("0132546789AB")); // false (нет двоеточий)

alert(regexp.test("01:32:54:67:89")); // false (5 чисел, должно быть 6)

alert(regexp.test("01:32:54:67:89:ZZ")); // false (ZZ в конце строки)

// 2 task Найти цвет в формате #abc или #abcdef
let regexpp = /#([a-f0-9]{3}){1,2}\b/g;

let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

alert(str.match(regexpp)); // #3f3 #AA00ef

// 3 task Найти все числа
let regexppp = /-?\d+(\.\d+)?/g;

let strrr = "-1.5 0 2 -123.4.";

alert(strrr.match(regexppp)); // -1.5, 0, 2, -123.4

// 4 task Разобрать выражение
function parse(expr) {
  let regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;

  let result = expr.match(regexp);

  if (!result) return [];
  result.shift();

  return result;
}

alert(parse("-1.23 * 3.45")); // -1.23, *, 3.45
