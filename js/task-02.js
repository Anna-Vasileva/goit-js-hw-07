const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ulEl = document.querySelector("ul#ingredients");
const ulIngredientsEL = ingredients.map((elem) => {
  const value = document.createElement("li");
  value.textContent = elem;
  return value;
});

ulEl.append(...ulIngredientsEL);
