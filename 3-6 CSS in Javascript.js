// #3.6 CSS in Javascript

const h1 = document.querySelector(".hello:first-child h1")

function handleMouseClick() {
    // console.log(h1.style.color);
    // h1.style.color = "tomato";
    // console.log(h1.style.color);

    const currentColor = h1.style.color;
    let newColor;

    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleMouseClick);

// .js에서 css 건드리면 스마트하지모태