// 1 task Редактируемый div
const div = document.querySelector("div");

div.addEventListener("focus", () => {
  div.tagName = "textarea";
});

div.addEventListener("blur", () => {
  div.tagName = "div";
});

// 2 task Редактирование TD по клику
let table = document.getElementById("bagua-table");

let editingTd;

table.onclick = function (event) {
  let target = event.target.closest(".edit-cancel,.edit-ok,td");

  if (!table.contains(target)) return;

  if (target.className == "edit-cancel") {
    finishTdEdit(editingTd.elem, false);
  } else if (target.className == "edit-ok") {
    finishTdEdit(editingTd.elem, true);
  } else if (target.nodeName == "TD") {
    if (editingTd) return;

    makeTdEditable(target);
  }
};

function makeTdEditable(td) {
  editingTd = {
    elem: td,
    data: td.innerHTML,
  };

  td.classList.add("edit-td");

  let textArea = document.createElement("textarea");
  textArea.style.width = td.clientWidth + "px";
  textArea.style.height = td.clientHeight + "px";
  textArea.className = "edit-area";

  textArea.value = td.innerHTML;
  td.innerHTML = "";
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML(
    "beforeEnd",
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove("edit-td");
  editingTd = null;
}

// 3 task Мышь, управляемая клавиатурой
mouse.tabIndex = 0;

mouse.onclick = function () {
  this.style.left = this.getBoundingClientRect().left + "px";
  this.style.top = this.getBoundingClientRect().top + "px";

  this.style.position = "fixed";
};

mouse.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowLeft":
      this.style.left = parseInt(this.style.left) - this.offsetWidth + "px";
      return false;
    case "ArrowUp":
      this.style.top = parseInt(this.style.top) - this.offsetHeight + "px";
      return false;
    case "ArrowRight":
      this.style.left = parseInt(this.style.left) + this.offsetWidth + "px";
      return false;
    case "ArrowDown":
      this.style.top = parseInt(this.style.top) + this.offsetHeight + "px";
      return false;
  }
};
