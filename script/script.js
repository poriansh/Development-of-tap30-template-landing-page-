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

document.querySelectorAll(".service__item").forEach((item) => {
  item.addEventListener("click", () => {

    document.querySelector(".service__item--active").classList.remove("service__item--active");
    item.classList.add("service__item--active");
    // 
    document.querySelector(".service-discription--active")
    .classList.remove("service-discription--active");
    
    const tabId = item.getAttribute("data-id");
    document.getElementById(tabId).classList.add("service-discription--active");
  });
});
