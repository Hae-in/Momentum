// # 3.5 More Events

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

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS! No wifi!");
}

function handleWindowONline() {
    alert("All Good!");
}

//title.addEventListener("click", handleTitleClick); // 함수명뒤에 () 없어야함!

title.onClick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowONline);

