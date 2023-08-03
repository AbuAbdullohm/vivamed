const headerLinks = document.querySelector(".header-links");
const mobIcon = document.querySelector(".header-mobicon");
const headerContact = document.querySelector(".header-contact");
const headerButtons = document.querySelector(".header-buttons");

function openMenu() {
  if (headerLinks.classList.contains("open-menu")) {
    headerLinks.classList.remove("open-menu");
    headerContact.classList.remove("show-contact");
    headerButtons.classList.remove("show-buttons");
    headerLinks.style.display = "none";
    document.body.style.overflowY = "auto";
    let headerWrapper = (document.querySelector(
      ".header-wrapper"
    ).style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px");
  } else {
    headerLinks.classList.add("open-menu");
    headerContact.classList.add("show-contact");
    headerButtons.classList.add("show-buttons");
    headerLinks.style.display = "block";
    document.body.style.overflowY = "hidden";
    let headerWrapper = (document.querySelector(
      ".header-wrapper"
    ).style.boxShadow = "none");
  }
}
