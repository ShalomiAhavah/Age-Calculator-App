var yearInput = document.querySelector("#year-input-field");
var monthInput = document.querySelector("#month-input-field");
var dayInput = document.querySelector("#day-input-field");
var inputArray = [yearInput, monthInput, dayInput];

var yearInputError = document.querySelector("#error-field-year");
var monthInputError = document.querySelector("#error-field-month");
var dayInputError = document.querySelector("#error-field-day");
var errorArray = [yearInputError, monthInputError, dayInputError];

var dayLabel = document.querySelector("#day-date-label");
var monthLabel = document.querySelector("#month-date-label");
var yearLabel = document.querySelector("#year-date-label");
var errorClassAssignLabel = [yearLabel, monthLabel, dayLabel];

var convertInput = document.querySelector("#convert-button");

var yearOutput = document.querySelector("#year-output");
var monthOutput = document.querySelector("#month-output");
var dayOutput = document.querySelector("#day-output");

var errorMessageEmpty = "This field is required";
var errorMessageDayMonth = "Must be a valid ";
var errorMessageYear = "Must be in the past";

var shortMonths = [2, 4, 6, 9, 11];
var currentYear = new Date().getFullYear();

var yearIsValid = true;
var monthIsValid = true;
var dayIsValid = true;

function checkForValidity() {
  for (i = 0; i < inputArray.length; i++) {
    let errorField = errorArray[i];
    let label = errorClassAssignLabel[i];

    if (inputArray[i].value === "") {
      //Assigns errors if empty
      errorField.innerHTML = errorMessageEmpty;
      inputArray[i].classList.add("error-state");
      label.classList.add("error-state");
    } else {
      errorField.innerHTML = "";
      label.classList.remove("error-state");
      inputArray[i].classList.remove("error-state");
    }
  }
  checkDayValidity();
  checkMonthValidity();
  checkYearValidity();
}

function checkDayValidity() {
  let day = dayInput.value;
  day = Number(day);
  let todayPre = new Date();
  let today = todayPre.getDay();

  let month = monthInput.value;
  month = Number(month);
  console.log(typeof today);
  if (day > 31 || day < 1) {
    dayErrorActions();
  }
  if (shortMonths.includes(month)) {
    if (day === 31) {
      dayErrorActions();
    }
  }
  if (dayIsValid) {
    console.log(todayPre.getDay());
    dayOutput.innerHTML = today - day;
  }

  function dayErrorActions() {
    let x = "day";
    dayInputError.innerHTML = errorMessageDayMonth + x;
    dayInput.classList.add("error-state");
    dayLabel.classList.add("error-state");
    dayIsValid = false;
  }
}

function checkMonthValidity() {
  var monthIn = monthInput.value;
  monthIn = Number(monthIn);
  if (monthIn > 12 || monthIn < 1) {
    let x = "month";
    monthInputError.innerHTML = errorMessageDayMonth + x;
    monthInput.classList.add("error-state");
    monthLabel.classList.add("error-state");
    monthIsValid = false;
  } else {
    monthIsValid = true;
    countMonthsSince();
  }
}
function countMonthsSince() {
  let monthss = new Date();
  var monthsss = monthss.getMonth() + 1;
  if (monthIsValid) {
    monthOutput.innerHTML = monthsss - monthInput.value;
    console.log(monthIsValid);
  }
}

function checkYearValidity() {
  yearOutput.innerHTML = "--";
  if (yearInput.value > currentYear) {
    yearInputError.innerHTML = errorMessageYear;
    yearInput.classList.add("error-state");
    yearLabel.classList.add("error-state");
    yearIsValid = false;
    return yearIsValid;
  } else {
    countYearsSince();
  }
}

function countYearsSince() {
  let inputYear = yearInput.value;
  inputYear = Number(inputYear);
  let yearsSince = currentYear - inputYear;
  if (yearIsValid) {
    yearOutput.innerHTML = yearsSince;
  }
}
