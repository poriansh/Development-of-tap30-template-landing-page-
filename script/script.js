let taggelmenu = document.querySelector(".nav-taggel");
let taggel = document.querySelector(".nav-taggel__line");
let navmenu = document.querySelector(".header-nav");
taggelmenu.addEventListener("click", () => {
  taggel.classList.toggle("nav-taggel__line--open");
  if (navmenu.style.height) {
    navmenu.style.height = null;
    navmenu.classList.remove("header-nav--active");
    } else {
    navmenu.style.height = navmenu.scrollHeight + "px";
    navmenu.classList.add("header-nav--active");
  }
});
