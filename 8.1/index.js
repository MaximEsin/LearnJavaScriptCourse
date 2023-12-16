// 1 task Работа с прототипами
let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps); // true

delete rabbit.jumps;

alert(rabbit.jumps); // null

delete animal.jumps;

alert(rabbit.jumps); // undefined

// 2 task Алгоритм поиска
let head = {
  glasses: 1, // Here it might be slightly faster
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// 3 task Куда будет произведена запись?
let animall = {
  eat() {
    this.full = true;
  },
};

let rabbitt = {
  __proto__: animall,
};

rabbitt.eat(); // rabbitt

// 4 task Почему наедаются оба хомяка?
let hamster = {
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple
