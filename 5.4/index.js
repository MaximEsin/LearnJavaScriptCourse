// 1 task Скопирован ли массив?
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // 4

// 2 task Операции с массивами
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[2] = "Классика";
const lastElement = styles[styles.length - 1];
alert(lastElement);
styles.shift();
styles.unshift("Рэп", "Регги");

// 3 task Вызов в контексте массива
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // Выводит a,b,function

// 4 task Сумма введённых чисел
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Введите число", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// 5 task Подмассив наибольшей суммы
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}
