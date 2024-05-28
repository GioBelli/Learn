const add = document.getElementById("add");
const sub = document.getElementById("substract");
const counterText = document.getElementById("counter");
let count = 0;
counterText.innerText = count;

add.addEventListener("click", () => {
  count++;
  counterText.innerText = count;
});

substract.addEventListener("click", () => {
  if (!count == 0) {
    count--;
    counterText.innerText = count;
  }
});
