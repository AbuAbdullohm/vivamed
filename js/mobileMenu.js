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
  } else {
    otherLanguage.classList.add("active");
    otherLanguage.style.display = "block";
  }
});

document.onclick = function (e) {
  if (e.target != defLanguage && e.target != otherLanguage) {
    otherLanguage.classList.remove("active");
    otherLanguage.style.display = "none";
  }
};

const listItem = document.querySelectorAll(".list-item");
const contentText = document.querySelector(".content-text");
const contentTitle = document.querySelector(".content-title");

let myText = [
  {
    id: "myText1",
    title: "Наши услуги",
    text: `Наш формат универсальная семейная клиника в которой взрослым и
              детям оказывается различные виды медицинской помощи.Диагностика,
              лечение и профилактика заболеваний практически по всем
              направлениям современной медицины.`,
  },
  {
    id: "myText2",
    title: "Наши специалисты",
    text: `Наших центрах работают опытные специалисты, который с вниманием
          относится к каждому пациенту. Это профессионалы которые станут вашими
          партнёрами в сохранении здоровья. Наша команда более 20 врачей разных
          Специальностей Среди них 15 кандидатов медицинских наук 15 докторов
          медицинских наук три профессора в две доцентов и ещё много очень
          сотрудников заслуженныйе врачи Узбекистан.`,
  },
  {
    id: "myText3",
    title: "Специалисты  Viva",
    text: `Наших медицинских центрах работают врачи как самых востребованных
          медицинских специальностей: терапевты, кардиологии, урологии,
          гинекологии, офтальмологи, оториноларингологии, хирурги и другие так и
          редких: генетики, репродуктологии, эмбриологии, гепатологии и другие.
          В детских отделениях ведут прием доктора специализирующихся на лечение
          детей с первых дней жизни до совершеннолетия`,
  },
  {
    id: "myText4",
    title: "Хирургия",
    text: `Для успешного лечения необходимо прогресс инновации. Десятка Врачей и
          специалистов нашей клинике и партнёрских клиник расследует общая цель:
          разработать новые формы терапии и как можно быстрее внедрить их на
          практике чтобы помочь пациентам.`,
  },
  {
    id: "myText5",
    title: "Здоровья",
    text: `Здоровья - самый ценный ресурс. Вернуть его сохранить, приумножить
          такая задачи посилам каждому в партнёрстве c “Viva Medical Center”.
          Осознавая Свою ответственность перед обществом “Viva Medical Center”
          действует в облога своих пациентов и сотрудников, сохраняя их здоровье
          и атмосферу всеобщего доверия.`,
  },
  {
    id: "myText6",
    title: "Наши услуги",
    text: `Весь персонал, с которым я контактировал, делал все возможное, чтобы
        помочь мне с моими медицинскими проблемами. Сейчас я веду более активный
        образ жизни и больше не чувствую дискомфорта в груди.`,
  },
  {
    id: "myText7",
    title: "Наш формат",
    text: `Наш формат универсальная семейная клиника в которой взрослым и
              детям оказывается различные виды медицинской помощи.Диагностика,
              лечение и профилактика заболеваний практически по всем
              направлениям современной медицины.`,
  },
];

listItem.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    listItem.forEach((item) => {
      if (e.target.innerHTML === item.innerHTML) {
        e.target.classList.add("active");
        const randomNum = Math.floor(Math.random() * 7 + 1);
        contentTitle.innerText = myText[randomNum].title;
        contentText.innerHTML = myText[randomNum].text;
      } else {
        item.classList.remove("active");
      }
    });
  });
});
