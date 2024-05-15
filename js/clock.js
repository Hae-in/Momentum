const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 5초마다 실행
// setInterval(sayHello, 5000);

// 5초 뒤 실행
// setTimeout(sayHello, 5000);

getClock(); // website가 load되자마자 getClock()을 실행
setInterval(getClock, 1000); // 매초마다 실행
