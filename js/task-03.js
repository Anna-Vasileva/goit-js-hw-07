const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ulEl = document.querySelector("ul#gallery");
const makeElementUl = (url, alt) => {
  return `<li><img src="${url}" alt = "${alt}" class="gallery__img"></img></li>`;
};
const arrEl = images.map(({ url, alt }) => {
  return makeElementUl(url, alt);
});

ulEl.insertAdjacentHTML("beforeend", arrEl.join(""));
ulEl.classList.add("gallery");
