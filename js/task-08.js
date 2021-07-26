const btnRenderEl = document.querySelector('button[data-action="render"]');
const btnDestroyEl = document.querySelector('button[data-action="destroy"]');
const inputEl = document.querySelector("#controls > input");
const divBoxesEl = document.getElementById("boxes");
let width = 20;
let height = 20;
let amount = 0;

const createBoxes = (amount) => {
  const arr = [];

  while (amount > 0) {
    const elem = document.createElement("div");
    elem.style.width = `${(width += 10)}px`;
    elem.style.height = `${(height += 10)}px`;
    elem.style.backgroundColor = randBackgroundColor();
    arr.push(elem);
    amount -= 1;
  }

  divBoxesEl.append(...arr);
};
const randBackgroundColor = () => {
  return `rgb(${rand()},${rand()},${rand()})`;
};
const rand = () => {
  return Math.floor(Math.random() * 256);
};
const onRenderButton = () => {
  //   console.log(amount);
  createBoxes(amount);
};
const onInputChange = (event) => {
  amount = event.currentTarget.value;
  console.log(amount);
};
const destroyBoxes = () => {
  divBoxesEl.innerHTML = "";
  width = 20;
  height = 20;
};
// const onInputChange = (event) => {};

// inputEl.addEventListener("input", onInputChange);
// createBoxes(amount);
inputEl.addEventListener("input", onInputChange);
btnRenderEl.addEventListener("click", onRenderButton);
btnDestroyEl.addEventListener("click", destroyBoxes);
