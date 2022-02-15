const todayDate = new Date();
const day = todayDate.getDate();
const year = todayDate.getFullYear();
let month = todayDate.getMonth() + 1;

async function fullTimeTable(selectedMonth) {
  const promise = await fetch('./assets/fullTimeTable.json');
  const data = await promise.json();
  //console.log(data);
  let currMonth = 0;
  selectedMonth != undefined
    ? (currMonth = data[selectedMonth])
    : (currMonth = data[month]);
  //console.log(currMonth);
  //console.log(selectedMonth)
  const ElFullTable = document.querySelector('.full-timetable__body');
  // console.log(ElFullTable);
  ElFullTable.innerHTML = currMonth
    .map((time) => timeTableHTML(time, selectedMonth))
    .join('');
}

function filterMonths(event) {
  fullTimeTable(event.target.value);
}

fullTimeTable();

function timeTableHTML(value, selectedMonth) {
  selectedMonth != undefined
    ? (month = selectedMonth)
    : (month = todayDate.getMonth() + 1);
  const currDate = `${day}-${month}-${year}`;
  return `<tr class="${
    currDate === `${value.Date}-${todayDate.getMonth() + 1}-2022`
      ? 'highlight'
      : ''
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

//sets the select button to current month when routing from home to full timetable
if (document.getElementById('month-selector').value === '0') {
  document.getElementById('month-selector').value = month;
}
