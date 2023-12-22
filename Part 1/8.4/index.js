// 1 task Добавьте toString в словарь
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// apple и __proto__ выведены в цикле
for (let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// список свойств, разделённых запятой, выведен с помощью toString
alert(dictionary); // "apple,__proto__"

// 2 task Разница между вызовами
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined
