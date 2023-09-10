// sticky menu transparency
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector(".main-nav").style.background =
      " rgba(0, 0, 0, 0.7)";
  } else {
    document.querySelector(".main-nav").style.background = " rgba(0, 0, 0, 0)";
  }
});

// hamburger menu

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// trying
var div = document.getElementById("main");
var display = 0;

function show() {
  if (display == 1) {
    div.style.display = "block";
    display = 0;
  } else {
    div.style.display = "none";
    display = 1;
  }
}
