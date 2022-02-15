const todayDate = new Date();
const month = todayDate.getMonth() + 1;

async function main() {
  const promise = await fetch('./assets/JamaatTime.json');
  const data = await promise.json();

  const todayDate = new Date();
  const month = todayDate.getMonth() + 1;
  const day = todayDate.getDate() - 1;
  const currMonth = data[month][day];
  // console.log(currMonth);

  const Elprayer = document.body.querySelector('.prayer__list');
  Elprayer.innerHTML = prayerHTML(currMonth);
}

main();

function prayerHTML(prayer) {
  return `<div class="prayer">
      <h2 class="prayer__title">Fajr</h2>
      <h2 class="prayer__time">${prayer.Fajar}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Zuhr</h2>
    <h2 class="prayer__time">${prayer.Zhur}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Asr</h2>
    <h2 class="prayer__time">${prayer.Asar}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Magrib</h2>
    <h2 class="prayer__time">${prayer.Maghrib}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Isha</h2>
    <h2 class="prayer__time">${prayer.Isha}</h2>
    </div>`;
}

function setToCurrentMonth() {
  localStorage.setItem('month', month);
  console.log('set month');
  console.log('button clicked');
}
