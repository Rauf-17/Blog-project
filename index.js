const MenuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("menu");

MenuIcon.addEventListener("click", () => {
  if(navMenu?.className === "hidden") {
  navMenu.classList.remove("hidden");
  }
  else{
    navMenu.classList.add("hidden");
  }

});
