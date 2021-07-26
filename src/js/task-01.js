const liEl = document.querySelectorAll("ul#categories > li.item");
console.log(`В списке ${liEl.length} категории.`);
liEl.forEach((elem) => {
  console.log(`Категория: ${elem.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов: ${elem.querySelectorAll("ul > li").length}`
  );
});
