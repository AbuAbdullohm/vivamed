const headerLinks = document.querySelector(".header-links");
const mobIcon = document.querySelector(".header-mobicon");
const headerContact = document.querySelector(".header-contact");
const headerButtons = document.querySelector(".header-buttons");
const defLanguage = document.querySelector(".default-language");
const otherLanguage = document.querySelector(".other-languages");

const specialists = document.querySelectorAll(".list-item");

for (let i = 0; i < specialists.length; i++) {
  specialists[i].addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 12 + 1);
    document.getElementById(
      "specialist-colleague"
    ).src = `../images/home/image-${randomNum}.png`;
  });
}

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

defLanguage.addEventListener("click", () => {
  if (otherLanguage.classList.contains("active")) {
    otherLanguage.classList.remove("active");

    otherLanguage.style.display = "none";
    console.log("first");
  } else {
    otherLanguage.classList.add("active");
    otherLanguage.style.display = "block";
    console.log("second");
  }
});

window.onclick = function (e) {
  if (e.target != defLanguage && e.target != otherLanguage) {
    otherLanguage.classList.remove("active");
    otherLanguage.style.display = "none";
    console.log("third");
  }
};

const listItem = document.querySelectorAll(".list-item");

listItem.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    listItem.forEach((item) => {
      if (e.target.innerHTML === item.innerHTML) {
        e.target.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});
