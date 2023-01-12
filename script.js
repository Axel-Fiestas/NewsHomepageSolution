const buttonMenu = document.querySelector("#menuOpen");
const buttonCloseMenu = document.querySelector("#menuClose");
const sideMenu = document.querySelector("#sideMenu");

buttonMenu.addEventListener("click", () => {
  sideMenu.classList.remove("hidden");
});

buttonCloseMenu.addEventListener("click", () => {
  sideMenu.classList.add("hidden");
});
