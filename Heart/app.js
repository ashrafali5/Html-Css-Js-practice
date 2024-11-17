const blueHeart = document.querySelector(".blue-heart");
const greenHeart = document.querySelector(".green-heart");

blueHeart.addEventListener("click", () => {
  greenHeart.classList.add("animation");
  blueHeart.classList.add("fill-color");
});
greenHeart.addEventListener("click", () => {
  greenHeart.classList.remove("animation");
  blueHeart.classList.remove("fill-color");
});
