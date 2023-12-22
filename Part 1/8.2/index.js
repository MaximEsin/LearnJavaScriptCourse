// 1 task Изменяем "prototype"
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert(rabbit.eats); // true

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // false

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert( rabbit.eats ); // true

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats ); // undefined

// 2 task Создайте новый объект с помощью уже существующего
let func = new Function();
let obj = new func.constructor();
//obj.prototype = {} // This will make obj2 inherit from Object.prototype
let obj2 = new obj.constructor();
