const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

function onLoginSubmit(event) {
  event.preventDefault(); // 어떤 event의 기본 행동이 발생되지 않도록 막아줌,
  //ex) form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다.
  //console.log(event);
  const username = loginInput.value;
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
