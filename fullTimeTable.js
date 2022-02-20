const todayDate = new Date();
const day = todayDate.getDate();
const year = todayDate.getFullYear();
// console.log(year);
let month = todayDate.getMonth() + 1;

//init local storage of current month if there is none
if (localStorage.getItem('month') === null) {
  localStorage.setItem('month', month);
}

//init selector name
document.getElementById('month-selector').value = localStorage.getItem('month');

async function fullTimeTable(selectedMonth) {
  const promise = await fetch('./assets/FullTimeTable.json');
  const data = await promise.json();
  //console.log(data);
  let currMonth = 0;
  selectedMonth != undefined
    ? (currMonth = data[selectedMonth])
    : (currMonth = data[month]);
  //console.log(currMonth);
  // console.log(selectedMonth);
  const ElFullTable = document.querySelector('.full-timetable__body');
  // console.log(ElFullTable);
  ElFullTable.innerHTML = currMonth
    .map((time) => timeTableHTML(time, selectedMonth))
    .join('');
}

function filterMonths(event) {
  fullTimeTable(event.target.value);
  localStorage.setItem(
    'month',
    document.getElementById('month-selector').value
  );
  document.getElementById('month-selector').value =
    localStorage.getItem('month');
}

fullTimeTable();

function timeTableHTML(value, selectedMonth) {
  selectedMonth != undefined
    ? (month = selectedMonth)
    : (month = localStorage.getItem('month'));
  const currDate = `${day}-${month}-${year}`;

  currParsedDate = new Date(
    `${year}-${month.length === 1 ? `0${month}` : month}-${
      value.Date.length === 1 ? `0${value.Date}` : value.Date
    }`
  );

  let originDay = currParsedDate.toString().slice(0, 3);

  let timeAMPM = value.Zhur.slice(0, 2);

  return `<tr class="${
    currDate === `${value.Date}-${todayDate.getMonth() + 1}-${year}`
      ? 'highlight'
      : ''
  }">
    <td>${value.Date}/${month}/${year}</td>
    <td>${originDay}</td>
    <td>${value.Fajr} am</td>
    <td>${value.Sunrise} am</td>
    <td>${timeAMPM === '11' ? `${value.Zhur} am` : `${value.Zhur} pm`}</td>
    <td>${value.Asar} pm</td>
    <td>${value.Sunset} pm</td>
    <td>${value.Isha} pm</td>
  </tr>`;
}

function toggleMenu() {
  document.body.classList.toggle('menu--open');
}

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;