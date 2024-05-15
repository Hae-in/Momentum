const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  //   console.log(li);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  // input 값 저장하고, input 내용 지우기
  const newTodo = todoInput.value;
  todoInput.value = "";
  // console.log(newTodo);
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
