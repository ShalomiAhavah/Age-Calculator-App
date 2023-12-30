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
var monthOutput = document.querySelector("#year-output");
var dayOutput = document.querySelector("#year-output");

var errorMessageEmpty = "This field is required";
var errorMessageDayMonth = "Must be a valid ";
var errorMessageYear = "Must be in the past";

var shortMonths = [2, 4, 6, 9, 11];
var currentYear = new Date().getFullYear();

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
      checkDayValidity();
      checkMonthValidity();
      checkYearValidity();
    }
  }
}

function checkDayValidity() {
  let day = dayInput.value;
  let month = monthInput.value;
  month = Number(month);
  day = Number(day);
  if (day > 31 || day < 1) {
    //Checks if the day is between 1 and 31
    dayErrorActions();
  }
  if (shortMonths.includes(month)) {
    if (day === 31) {
      dayErrorActions();
      console.log("short");
    }
  }

  function dayErrorActions() {
    let x = "day";
    dayInputError.innerHTML = errorMessageDayMonth + x;
    dayInput.classList.add("error-state");
    dayLabel.classList.add("error-state");
  }

  countYearsSince();
}

function checkMonthValidity() {
  if (monthInput.value > 12) {
    let x = "month";
    monthInputError.innerHTML = errorMessageDayMonth + x;
    monthInput.classList.add("error-state");
    monthLabel.classList.add("error-state");
    console.log();
  }
}

function checkYearValidity() {
  var yearIsValid = false;
  console.log(yearIsValid);
  if (yearInput.value > currentYear) {
    yearInputError.innerHTML = errorMessageYear;
    yearInput.classList.add("error-state");
    yearLabel.classList.add("error-state");
    yearIsValid = true;
  }
}

// checkIfEmpty();
function countYearsSince() {
  let inputYear = yearInput.value;
  inputYear = Number(inputYear);
  let yearsSince = currentYear - inputYear;
  if (yearIsValid) {
    yearOutput.innerHTML = yearsSince;
  }
}
