const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const todos = [];

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  // localStorage에 array를 저장할 수 없음
  // JSON.stringify() : JavaScript Object 나 array 또는 어떤 JavaScript 코드건 간에 String으로 변경
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = newTodo;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  // input 값 저장하고, input 내용 지우기
  const newTodo = todoInput.value;
  todoInput.value = "";
  // console.log(newTodo);
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
