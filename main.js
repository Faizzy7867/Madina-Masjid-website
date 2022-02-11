//API------ https://api.pray.zone/v2/times/this_month.json?city=wakefield

// target prayer__list class

function getTodayDate() {
  var TodayDate = new Date();
  var DayInCurrMonth = TodayDate.getDate();
  return DayInCurrMonth;
}

console.log(getTodayDate());

async function main() {
  const times = await fetch(
    'https://api.pray.zone/v2/times/this_month.json?city=wakefield'
  );

  const { results } = await times.json();
  const currentDayPrayerTimes = results.datetime[getTodayDate()];

  // console.log(results.datetime);
  console.log(currentDayPrayerTimes);

  const prayerListEl = document.body.querySelector('.prayer__list');

  prayerListEl.innerHTML = prayerHTML(currentDayPrayerTimes);
}

main();

function prayerHTML(prayer) {
  return `<div class="prayer">
      <h2 class="prayer__title">Fajr</h2>
      <h2 class="prayer__time">${prayer.times.Fajr}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Zuhr</h2>
    <h2 class="prayer__time">${prayer.times.Dhuhr}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Asr</h2>
    <h2 class="prayer__time">${prayer.times.Asr}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Magrib</h2>
    <h2 class="prayer__time">${prayer.times.Maghrib}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Isha</h2>
    <h2 class="prayer__time">${prayer.times.Isha}</h2>
    </div>`;
}
