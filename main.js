//Get todays day in the current month
function getTodayDate() {
  const TodayDate = new Date();
  const DayInCurrMonth = TodayDate.getDate();
  return DayInCurrMonth;
}

// console.log(getTodayDate());

async function main() {
  const times = await fetch(
    "https://api.pray.zone/v2/times/this_month.json?city=wakefield"
  );

  const { results } = await times.json();
  // console.log(results);
  const currentDayPrayerTimes = results.datetime[getTodayDate()].times;

  // console.log(results.datetime);
  console.log(currentDayPrayerTimes);

  const prayerListEl = document.body.querySelector(".prayer__list");
  prayerListEl.innerHTML = prayerHTML(currentDayPrayerTimes);
}

main();

function prayerHTML(prayer) {
  return `<div class="prayer">
      <h2 class="prayer__title">Fajr</h2>
      <h2 class="prayer__time">${prayer.Fajr}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Zuhr</h2>
    <h2 class="prayer__time">${prayer.Dhuhr}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Asr</h2>
    <h2 class="prayer__time">${prayer.Asr}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Magrib</h2>
    <h2 class="prayer__time">${prayer.Sunset}</h2>
    </div>
    <div class="prayer">
    <h2 class="prayer__title">Isha</h2>
    <h2 class="prayer__time">${prayer.Isha}</h2>
    </div>`;
}
