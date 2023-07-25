window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const accordion = document.querySelectorAll(".accordion");

accordion.forEach((item, index) => {
  let header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let myContent = item.querySelector(".accordion-content");
    let plusBtn = item.querySelector(".plus-button");

    if (item.classList.contains("open")) {
      myContent.style.height = `${myContent.scrollHeight}px`;
      plusBtn.style.display = `hidden`;
    } else {
      myContent.style.height = "0px";
    }

    console.log(myContent);
  });
});
