// # 3.2 Searching For Elements

//const title = document.getElementsByTagName("h1");
// const title1 = document.querySelector(".hello h1"); // querySelector : element를 css 방식으로 검색, 첫번째것만 가져옴
// console.log(title1); // <h1 autofocus="" id="title 1">Grab me!</h1>

// const title = document.querySelectorAll(".hello h1"); // querySelectorAll : 조건에 부합하는 모든 element를 배열로 가져옴
// console.log(title); // NodeList(3) [h1#title 1, h1#title 2, h1#title 3]


// const a = document.querySelector("#hello h1");
// const b = document.getElementById("hello"); // a === b
// console.log(a);
// console.log(b);

// const c = document.querySelector(".hello h1");
// const d = document.getElementsByClassName("hello"); // a === b
// console.log(c);
// console.log(d);

//const title = document.querySelector(".hello:first-child h1");
const title = document.querySelector("div.hello:first-child h1");
console.log(title);