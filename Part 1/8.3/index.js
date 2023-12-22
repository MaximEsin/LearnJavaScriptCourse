// 1 task Добавить функциям метод "f.defer(ms)"
function f() {
  alert("Hello!");
}
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

f.defer(1000); // выведет "Hello!" через 1 секунду

// 2 task Добавьте функциям декорирующий метод "defer()"
function f(a, b) {
  alert(a + b);
}

Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
