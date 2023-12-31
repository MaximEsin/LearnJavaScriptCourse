// 1 task Связанная функция как метод
function f() {
  alert(this); // null
}

let user = {
  g: f.bind(null),
};

user.g();

// 2 task Повторный bind
function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f(); // Вася

// 3 task Свойство функции после bind
function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test); // undefined

// 4 task Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let userr = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(userr.loginOk.bind(user), userr.loginFail.bund(user));

// 5 task Использование частично применённой функции для логина
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let userrr = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(
  () => login(true),
  () => login(false)
);
