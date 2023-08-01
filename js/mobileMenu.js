const headerLinks = document.querySelector(".header-links");
const mobIcon = document.querySelector(".header-mobicon");

function openMenu() {
  if (headerLinks.classList.contains("open-menu")) {
    headerLinks.classList.remove("open-menu");
    headerLinks.style.display = "none";
    document.body.style.overflowY = "auto";
    // mobIcon.style.display = "block";
  } else {
    headerLinks.classList.add("open-menu");
    headerLinks.style.display = "block";
    document.body.style.overflowY = "hidden";
    // mobIcon.style.display = "none";
  }
}
