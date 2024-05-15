const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function handleTodoSubmit(event) {
  event.preventDefault();
  // input 값 저장하고, input 내용 지우기
  const newTodo = todoInput.value;
  todoInput.value = "";
  console.log(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
