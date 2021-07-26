const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");
const onInputChange = (event) => {
  console.log(event.currentTarget.value);
  spanEl.setAttribute("style", `font-size:${event.currentTarget.value}px`);
};
inputEl.addEventListener("input", onInputChange);
