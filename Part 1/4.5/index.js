// 1 task Две функции - один объект
let x = {};

function A() {
  return x;
}
function B() {
  return x;
}

alert(new A() == new B()); // true

// 2 task Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();

// 3 task Создайте new Accumulator
let Accumulator = function (startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Сколько нужно добавить?", 0);
  };
};

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
