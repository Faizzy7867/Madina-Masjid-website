async function fullTimeTable() {
  const promise = await fetch('./assets/fullTimeTable.json');
  const data = await promise.json();
  // console.log(data);

  // const todayDate = new Date();
  // const month = todayDate.getMonth() + 1;
  // const day = todayDate.getDate() - 1;
  const currMonth = data[2];
  console.log(currMonth);
  const ElFullTable = document.body.querySelector('.full-timetable__body');
  ElFullTable.innerHTML = currMonth.map((time) => timeTableHTML(time)).join('');
}

fullTimeTable();

function timeTableHTML(value) {
  return `<tr>
    <td>${value.Date}/02/2022</td>
    <td>${value.Date}</td>
    <td>${value.Fajr}</td>
    <td>${value.Sunrise}</td>
    <td>${value.Zhur}</td>
    <td>${value.Asar}</td>
    <td>${value.Sunset}</td>
    <td>${value.Isha}</td>
  </tr>`;
}
