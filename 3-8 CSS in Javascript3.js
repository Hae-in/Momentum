// # 3-8 CSS in Javascript3

/*
const h1 = document.querySelector(".hello:first-child h1")

function handleTitleClick() {
    //className 변경시 기존의 className을 덮어쓰기해서 사라짐

    const clickedClass = "clicked";
    
    //classList : class들의 목록으로 작업할 수 있게끔 허용해줌
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass)
    } else {
        h1.classList.add(clickedClass)
    }
}

h1.addEventListener("click", handleTitleClick);
*/


const h1 = document.querySelector(".hello:first-child h1")

function handleTitleClick() {
    h1.classList.toggle("clicked") 
    // toggle : classList에 clicked class가 존재하는지 확인 후, 
    // 만약 clicked 있으면, toggle이 clicked 제거
    // 만약 clicked 없으면, toggle이 classList에 clicked 추가
}

h1.addEventListener("click", handleTitleClick);