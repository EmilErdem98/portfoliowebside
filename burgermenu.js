const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

console.log("burgerMenu:", burgerMenu);
console.log("menu:", menu);

burgerMenu.addEventListener("click", function () {
  menu.classList.toggle("show");

  console.log("Burger menu clicked!");

  if (menu.classList.contains("show")) {
    console.log("Menu is now visible");
  } else {
    console.log("Menu is now hidden");
  }
});
