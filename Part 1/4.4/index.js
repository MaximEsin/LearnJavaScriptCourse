// 1 task Использование "this" в литерале объекта
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // undefined

// 2 task Создайте калькулятор
let calculator = {
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return a * b;
  },
};

// 3 task Цепочка вызовов
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
