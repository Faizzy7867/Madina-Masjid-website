const todayDate = new Date();
const day = todayDate.getDate();
const year = todayDate.getFullYear();

let month = todayDate.getMonth() + 1;

async function fullTimeTable() {
  const promise = await fetch('./assets/fullTimeTable.json');
  const data = await promise.json();
  // console.log(data);

  const currMonth = data[month];
  // console.log(currMonth);
  const ElFullTable = document.querySelector('.full-timetable__body');
  // console.log(ElFullTable);
  ElFullTable.innerHTML = currMonth.map((time) => timeTableHTML(time)).join('');
}

fullTimeTable();

function timeTableHTML(value) {
  const currDate = `${day}-${month}-${year}`;
  return `<tr class="${
    currDate === `${value.Date}-${month}-2022` ? 'highlight' : ''
  }">
    <td>${value.Date}/${month}/${year}</td>
    <td>${value.Date}</td>
    <td>${value.Fajr}</td>
    <td>${value.Sunrise}</td>
    <td>${value.Zhur}</td>
    <td>${value.Asar}</td>
    <td>${value.Sunset}</td>
    <td>${value.Isha}</td>
  </tr>`;
}
