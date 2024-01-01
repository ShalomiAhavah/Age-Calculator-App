# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./design/Screenshot%202024-01-01%20162523.png)

### Links

- Solution URL: [](https://age-calculator-app-tau-lilac.vercel.app/)
- Live Site URL: [](https://age-calculator-app-tau-lilac.vercel.app/)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- Less
- Ma Brain
- Blackbox.ai to explain concepts

### What I learned

I enjoyed working with for loops to get the same index on different items in arrays;

```js
var inputArray = [yearInput, monthInput, dayInput];

for (i = 0; i < inputArray.length; i++) {
    let errorField = errorArray[i];
    let label = errorClassAssignLabel[i];

    if (inputArray[i].value === "") {
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
```

### Continued development

- I really want to learn to condense my javascript code more
- I want to learn to make my css code neater

### Useful resources

- [Blackbox AI](https://www.blackbox.ai/) - This helped me understand concepts. Don't just copy code though

## Author

- Website - [Julia Gaugler](https://juliagaugler-frontend.carrd.co/)
- Frontend Mentor - [@ShalomiAhavah](https://www.frontendmentor.io/profile/ShalomiAhavah)
