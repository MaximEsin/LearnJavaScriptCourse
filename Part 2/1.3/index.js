// 1 task Дочерние элементы в DOM
const div = document.body.firstElementChild;
const ul = document.body.lastElementChild;
const li = ul.lastElementChild;

// 2 task Вопрос о соседях
// elem.lastChild.nextSibling is always null
// elem.children[0].previousSibling not always null, because there can be other nodes

// 3 task Выделите ячейки по диагонали
const table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}
