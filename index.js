import { data } from "./data.js";
import { Card } from "./card.js";

const btnAddTodo = document.querySelector(".btn-add");
const modal = document.querySelector(".modal");
const btnSaveTodo = document.querySelector(".btn-primary");
const btnCloseTodo = document.querySelector(".btn-primary");
const todoTitle = document.querySelector(".add-todo-title");
const todoSubtitle = document.querySelector(".add-todo-subtitle");
const todoList = document.querySelector("ul");
const btnRemoveAll = document.querySelector(".btn-remove-all");
const btnRemoveLast = document.querySelector(".btn-remove-last");

todoList.innerHTML = data
  .map((todo) => new Card(todo.title, todo.description).getHtml())
  .join("");

btnAddTodo.onclick = function () {
  modal.style.display = "block";
};

btnCloseTodo.onclick = function () {
  modal.style.display = "none";
};

btnSaveTodo.addEventListener("click", () => {
  data.push(new Card(todoTitle.value, todoSubtitle.value));
  todoList.innerHTML = data
    .map((todo) => new Card(todo.title, todo.description).getHtml())
    .join("");
});

btnRemoveAll.onclick = function () {
  data.length = 0;
  todoList.innerHTML = data
    .map((todo) => new Card(todo.title, todo.description).getHtml())
    .join("");
};

btnRemoveLast.onclick = function () {
  data.pop();
  todoList.innerHTML = data
    .map((todo) => new Card(todo.title, todo.description).getHtml())
    .join("");
};
