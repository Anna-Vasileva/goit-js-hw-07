const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
const onInputFocus = (event) => {
  if (
    inputEl.getAttribute("data-length") ===
    String(event.currentTarget.value.length)
  ) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", onInputFocus);
