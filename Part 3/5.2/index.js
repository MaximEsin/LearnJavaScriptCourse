// 1 task Анимировать самолёт (CSS)
// let ended = false;

// flyjet.onclick = function () {
//   flyjet.addEventListener("transitionend", function () {
//     if (!ended) {
//       ended = true;
//       alert("Анимация закончилась!");
//     }
//   });

//   flyjet.classList.add("growing");
// };

// 2 task Анимировать самолёт с перелётом (CSS)
flyjet.onclick = function () {
  flyjet.classList.add("growing");
};

// 3 task Анимированный круг
function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + "px";
    div.style.height = radius * 2 + "px";
  }, 0);
}

// 4 task Анимация круга с помощью колбэка
function go() {
  showCircle(150, 150, 100, (div) => {
    div.classList.add("message-ball");
    div.append("Привет, мир!");
  });
}

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + "px";
    div.style.height = radius * 2 + "px";

    div.addEventListener("transitionend", function handler() {
      div.removeEventListener("transitionend", handler);
      callback(div);
    });
  }, 0);
}
