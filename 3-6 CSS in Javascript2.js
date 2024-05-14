//// #3.7 CSS in Javascript2

/*
const h1 = document.querySelector(".hello:first-child h1")

function handleMouseClick() {
    h1.className = "active";
}

h1.addEventListener("click", handleMouseClick);
*/

/*
const h1 = document.querySelector(".hello:first-child h1")

function handleMouseClick() {
    const activeClass = "active";

    if(h1.className === "active") {
        h1.className = "";
    } else {
        h1.className = "active";
    }
}

h1.addEventListener("click", handleMouseClick);
*/

const h1 = document.querySelector(".hello:first-child h1")

function handleMouseClick() {
    //h1.className = "active"; //css에서 지정한 이름과 같아야함

    const activeClass = "active";

    if(h1.className === activeClass) {
        h1.className = "";
    } else {
        h1.className = activeClass;
    }
}

h1.addEventListener("click", handleMouseClick);