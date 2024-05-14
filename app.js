const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  // console.dir(loginInput);
  // console.log(loginInput.value);
  // console.log("clicked!!");

  const username = loginInput.value;

  /*
  //html input에서 직접하도록 변경
  if (username === "") {
    // input에 입력이 없을 경우
    console.log("Please write your name.");
  } else if (username.length > 15) {
    // username이 15글자 초과할 경우
    console.log("Your name is too long.");
  }
  */
}

loginButton.addEventListener("click", onLoginBtnClick);
