const accordion = document.querySelectorAll(".accordion");

accordion.forEach((item, index) => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let myContent = item.querySelector(".accordion-content");

    if (item.classList.contains("open")) {
      myContent.style.height = `${myContent.scrollHeight + 10}px`;

      item.querySelector(".plus").style.transform = "rotate(90deg)";
    } else {
      myContent.style.height = "0";
      item.querySelector(".plus").style.transform = "rotate(0)";
    }
  });
});
