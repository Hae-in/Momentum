const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  // 어떤 event의 기본 행동이 발생되지 않도록 막아줌,
  // ex) form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다.
  event.preventDefault();
  // console.log(event);

  const username = loginInput.value;
  //console.log(username);

  // username을 입력받으면 입력창(input) 안보이게 함
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // input 안보이게 한 후, h1은 보이게 함(표시할 텍스트가 있을 때만)
  greeting.innerText = `Hello ${username}`; // 백틱

  // h1의 class="hidden" 없애주기
  greeting.classList.remove(HIDDEN_CLASSNAME);

  // 새로고침해도 username이 저장되도록 => local storage
  // setItem(Key,Value), getItem(Key), removeIten(Key)
  localStorage.setItem("username", username);
  //
}

loginForm.addEventListener("submit", onLoginSubmit);
