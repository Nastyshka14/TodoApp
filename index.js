const DB = getDataInStorage();
render();

$("#add-todo").addEventListener("click", function () {
  createCard($("#input").value);
  setDataInStorage();
  maxCount();
  clearInput($("#input"));
  render();
});

function initCardListeners(list) {
  list.childNodes.forEach(function (el, index) {
    el.addEventListener("click", function (event) {
      if (event.target.className === "btn-close") {
        DB.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(DB));
        render();
      } else if (event.target.classList.contains("form-check-input")) {
        list.childNodes[index].classList.toggle("text-decoration");
      }
    });
  });
}

function maxCount() {
  if (DB.length > 6) {
    $(".ttoast").classList.toggle("d-none");
    DB.pop();
    localStorage.setItem("todos", JSON.stringify(DB));
  }
  closeToast();
}

function $(selector) {
  return document.querySelector(selector);
}

function clearInput(input) {
  input.value = "";
}

function createElement(tag, className, text = "", type = "") {
  let element = document.createElement(tag);
  element.className = className;
  element.innerText = text;
  element.type = type;
  return element;
}

function createCard(txt) {
  const todo = createElement(
    "div",
    "card d-flex flex-row text-dark border-danger mb-2 p-2 align-items-center"
  );
  const text = createElement("div", "card-body", txt);
  const closeBtn = createElement("button", "btn-close");
  const inputCheck = createElement(
    "input",
    "form-check-input m-2",
    "",
    "checkbox"
  );
  todo.append(text, closeBtn, inputCheck);
  $("#todo-list").append(todo);
}

function setDataInStorage() {
  DB.push($("#input").value);
  localStorage.setItem("todos", JSON.stringify(DB));
}

function getDataInStorage() {
  let data = JSON.parse(localStorage.getItem("todos")) || [];
  return data;
}

function render() {
  while ($("#todo-list").firstChild) {
    $("#todo-list").removeChild($("#todo-list").firstChild);
  }
  DB.forEach((todo) => {
    createCard(todo);
  });
  $(".badge").innerText = DB.length;
  initCardListeners($("#todo-list"));
}

function closeToast() {
  $(".ttoast").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-close")) {
      $(".ttoast").classList.add("d-none");
    }
  });
}
