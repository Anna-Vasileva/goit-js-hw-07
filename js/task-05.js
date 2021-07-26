const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
const onInputChange = (event) => {
  spanEl.textContent =
    event.currentTarget.value.trim() === ""
      ? "незнакомец"
      : event.currentTarget.value;
};

inputEl.addEventListener("input", onInputChange);
