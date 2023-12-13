// 1 task Фильтрация уникальных элементов массива
function unique(arr) {
  let set = new Set();

  arr.forEach((item) => {
    set.add(item);
  });

  return Array.from(set);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values)); // Hare,Krishna,:-O

// 2 task Отфильтруйте анаграммы
function aclean(arr) {
  let map = new Map();

  arr.forEach((item) => {
    let sorted = item.toLowerCase().split("").sort().join("");
    map.set(sorted, item);
  });

  return Array.from(map.values());
}

// 3 task Перебираемые ключи
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
