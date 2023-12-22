// 1 task Ошибка при чтении несуществующего свойства
let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new ReferenceError(`Свойство не существует: "${prop}"`);
      }
    },
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует

// 2 task Получение элемента массива с отрицательной позиции
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, receiver);
  },
});

alert(array[-1]); // 3
alert(array[-2]); // 2

// 3 task Observable
function makeObservable(target) {
  target.observe = function (func) {
    Object.defineProperty(this, "name", {
      set(value) {
        func("name", value);
      },
    });
  };
  return target;
}

let userr = {};
userr = makeObservable(userr);

userr.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

userr.name = "John"; // выводит: SET name=John
