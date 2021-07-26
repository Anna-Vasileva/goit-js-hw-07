const counterDecBtn = document.querySelector('button[data-action="decrement"]');
const counterIncBtn = document.querySelector('button[data-action="increment"]');
const counterSpanEl = document.querySelector("#value");
const increment = () => {
  counterValue += 1;
  counterSpanEl.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  counterSpanEl.textContent = counterValue;
};
let counterValue = 0;

counterIncBtn.addEventListener("click", increment);
counterDecBtn.addEventListener("click", decrement);
