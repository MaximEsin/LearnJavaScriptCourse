// 1 task Перепишите, используя async/await
async function loadJson(url) {
  let link = await fetch(url);
  if (link.status == 200) {
    let json = await link.json();
    return json;
  } else {
    throw new Error(link.status);
  }
}

loadJson("no-such-user.json") // (3)
  .catch(alert); // Error: 404

// 2 task Перепишите, используя async/await
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Введите логин?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // ошибок не было, выходим из цикла
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // после alert начнётся новая итерация цикла
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        // неизвестная ошибка, пробрасываем её
        throw err;
      }
    }
  }
}

demoGithubUser();

// 3 task Вызовите async–функцию из "обычной"
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then((result) => alert(result));
}

f();
