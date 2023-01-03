const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const container = document.querySelector(".container");

leftSide.addEventListener("click", () => {
  if (leftSide.classList.contains("show")) {
    leftSide.classList.remove("show");
  } else {
    rightSide.classList.remove("show");
    leftSide.classList.add("show");
  }
});

rightSide.addEventListener("click", () => {
  if (rightSide.classList.contains("show")) {
    rightSide.classList.remove("show");
  } else {
    rightSide.classList.add("show");
    leftSide.classList.remove("show");
  }
});
