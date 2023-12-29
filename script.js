
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



function checkIfEmpty(){
    for (i = 0; i<inputArray.length; i++){    
        let errorField = errorArray[i];
        let label = errorClassAssignLabel[i];

        if (inputArray[i].value === ""){
            errorField.innerHTML = "false";
            inputArray[i].classList.add("error-state");
            label.classList.add("error-state");
        } else {
            errorField.innerHTML = "";
            label.classList.remove("error-state");
            inputArray[i].classList.remove("error-state");
        }
    }
}



console.log(inputArray)

// checkIfEmpty();
