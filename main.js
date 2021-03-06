const todayDate = new Date();
const month = todayDate.getMonth() + 1;

async function main() {
  const promise = await fetch("./assets/JamaatTime.json");
  const data = await promise.json();

  const todayDate = new Date();
  const month = todayDate.getMonth() + 1;
  const day = todayDate.getDate() - 1;
  const currMonth = data[month][day];
  // console.log(currMonth);

  const Elprayer = document.body.querySelector(".prayer__list");
  Elprayer.innerHTML = prayerHTML(currMonth);
}

main();

function prayerHTML(prayer) {
  let timeAMPM = prayer.Zhur.slice(0, 2);

  return `<div class="prayer">
      <h2 class="prayer__title">Fajr</h2>
      <h2 class="prayer__time">${prayer.Fajar} am</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Zuhr</h2>
    <h2 class="prayer__time">${
      timeAMPM === "11" ? `${prayer.Zhur} am` : `${prayer.Zhur} pm`
    }</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Asr</h2>
    <h2 class="prayer__time">${prayer.Asar} pm</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Magrib</h2>
    <h2 class="prayer__time">${prayer.Maghrib} pm</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Isha</h2>
    <h2 class="prayer__time">${prayer.Isha} pm</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Jummah</h2>
    <h2 class="prayer__time">1:30 pm</h2>
    </div>`;
}

function setToCurrentMonth() {
  localStorage.setItem("month", month);
}

// BURGER MENU
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
