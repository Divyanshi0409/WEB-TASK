let timer = document.getElementById("addtimer");
let dateold = new Date();
timer.innerHTML = dateold;

let timeout = setInterval(() => {
  let datenew = new Date();
  timer.innerHTML = datenew;

  if (datenew.getSeconds() - dateold.getSeconds() === 10) {
    clearInterval(timeout);
    alert("10 seconds time is over");
  }
}, 1000);
