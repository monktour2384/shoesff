const barsEl = document.querySelector(".fa-bars");
const closeEl = document.querySelector(".fa-x");
const asideEl = document.querySelector("aside");
const body = document.body;

closeEl.addEventListener("click", () => {
  asideEl.style.display = "none";
  body.style.display = "block";
});

barsEl.addEventListener("click", () => {
  body.style.display = "grid";
  asideEl.style.display = "block";
});
