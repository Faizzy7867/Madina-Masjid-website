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

  // adds st, nd, th to days
  let dateNR;
  if (value.Date === '1' || value.Date === '21' || value.Date === '31') {
    dateNR = `${value.Date}st`;
  } else if (value.Date === '2' || value.Date === '22') {
    dateNR = `${value.Date}nd`;
  } else {
    dateNR = `${value.Date}th`;
  }

  let timeAMPM = value.Zhur.slice(0, 2);
  // console.log(timeAMPM);
  if (timeAMPM === '11') {
    timeAMPM = `${value.Zhur} am`;
    console.log(timeAMPM);
  } else {
    timeAMPM = `${value.Zhur} pm`;
  }

  return `<tr class="${
    currDate === `${value.Date}-${todayDate.getMonth() + 1}-2022`
      ? 'highlight'
      : ''
  }">
    <td>${value.Date}/${month}/${year}</td>
    <td>${dateNR}</td>
    <td>${value.Fajr} am</td>
    <td>${value.Sunrise} am</td>
    <td>${timeAMPM}</td>
    <td>${value.Asar} pm</td>
    <td>${value.Sunset} pm</td>
    <td>${value.Isha} pm</td>
  </tr>`;
}

//sets the select button to current month when routing from home to full timetable
document.getElementById('month-selector').value = month;
