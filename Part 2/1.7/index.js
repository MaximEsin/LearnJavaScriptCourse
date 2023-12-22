// 1 task createTextNode vs innerHTML vs textContent
// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?

// elem.append(document.createTextNode(text))
// elem.innerHTML = text
// elem.textContent = text
// Answer: 1 & 3

// 2 task Очистите элемент
function clear(elem) {
  elem.innerHTML = "";
}

clear(elem);

// 3 task Почему остаётся "aaa"?
{
  /* <table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>

<script>
  alert(table); // таблица, как и должно быть

  table.remove();
  // почему в документе остался текст "ааа"?
</script> */
}
// Answer: Because the text node is not part of the table. It’s a separate node that is its child.

// 4 task Создайте список
const ul = document.createElement("ul");
document.body.append(ul);
function createLi() {
  while (true) {
    const answer = prompt("Enter li text");
    if (!answer) break;
    const li = document.createElement("li");
    li.textContent = answer;
    ul.append(li);
  }
}

// 5 task Создайте дерево из объекта
let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

function createTree(obj, parent) {
  const ul = document.createElement("ul");
  parent.append(ul);
  for (let key in obj) {
    const li = document.createElement("li");
    li.textContent = key;
    ul.append(li);
    if (Object.keys(obj[key]).length) {
      createTree(obj[key], li);
    }
  }
}
// 6 task Выведите список потомков в дереве
function createTree(obj) {
  const liArray = Array.from(obj.querySelectorAll("li"));
  for (let li of liArray) {
    const number = li.childNodes.length;
    if (!number) continue;
    const span = document.createElement("span");
    span.textContent = number;
    li.prepend(span);
  }
  return liArray;
}

// 7 task Создайте календарь в виде таблицы
function createCalendar(elem, year, month) {
  let mon = month - 1;
  let d = new Date(year, mon);

  let table =
    "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";
  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }

  while (d.getMonth() == mon) {
    table += "<td>" + d.getDate() + "</td>";

    if (getDay(d) % 7 == 6) {
      table += "</tr><tr>";
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }

  table += "</tr></table>";

  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar(calendar, 2012, 9);

// 8 task Цветные часы с использованием setInterval
function update() {
  let clock = document.getElementById("clock");
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = "0" + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  clock.children[2].innerHTML = seconds;
}

let timerId;

function clockStart() {
  timerId = setInterval(update, 1000);
  update();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

// 9 task Вставьте HTML в список
function insertHTML() {
  const ul = document.querySelector("ul");
  ul.childNodes[1].insertAdjacentHTML("beforebegin", "<li>2</li>");
  ul.childNodes[2].insertAdjacentHTML("beforebegin", "<li>3</li>");
}

// 10 task Сортировка таблицы
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) =>
    rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
  );

table.tBodies[0].append(...sortedRows);
