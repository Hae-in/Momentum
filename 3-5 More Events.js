// # 3.3 Events
// console.dir(title);  .dir 했을때, on~: 이벤트

const title = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!"
}

title.addEventListener("click", handleTitleClick); // 함수명뒤에 () 없어야함!
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
