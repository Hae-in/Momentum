const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let todos = []; // todos 업데이트

const TODOS_KEY = "todos";

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  // localStorage에 array를 저장할 수 없음
  // JSON.stringify() : JavaScript Object 나 array 또는 어떤 JavaScript 코드건 간에 String으로 변경
}

function sayHello(item) {
  console.log("this is turn of" + item);
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  //삭제할 li를 찾기 위해서 obj의 id를 참조
  li.id = newTodo.id;

  // span.innerText = newTodo;
  span.innerText = newTodo.text; // obj는 id, text를 갖고있음
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

  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  // todos.push(newTodo); // todos에 text 저장
  // paintTodo(newTodo);
  todos.push(newTodoObj); // todos에 object 저장
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

//JSON.parse("STRING") : string을 JSON.parse 안에 넣으면 배열로 만듦
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  //   console.log(`parsed todos : ${parsedTodos}`);

  // todos = []; 로 시작했기 때문에 업데이트 해줘야됨
  //localStorage에 저장되어 있는 값 + 현재 추가 된 값
  todos = parsedTodos;

  // array에 있는 각각의 item에 대해서 실행
  // parsedTodos.forEach(sayHello);
  // parsedTodos.forEach((item) => console.log("this is turn of", item)); // arrow function
  parsedTodos.forEach(paintTodo); // arrow function
}
