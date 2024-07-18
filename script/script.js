const taggelmenu = document.querySelector(".nav-taggel");
const taggel = document.querySelector(".nav-taggel__line");
const navmenu = document.querySelector(".header-nav");
taggelmenu.addEventListener("click", () => {
  taggel.classList.toggle("nav-taggel__line--open");
  if (navmenu.style.height) {
    navmenu.style.height = null;
  } else {
    navmenu.style.height = navmenu.scrollHeight + "px";
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
