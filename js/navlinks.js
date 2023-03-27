const navLinks = document.getElementById("nav-links");
const navTop = navLinks.offsetTop;

function stickyNavigation() {
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = navLinks.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", stickyNavigation);
