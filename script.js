// Variables
const math = document.querySelector(".math");
const result = document.querySelector(".result");
const calcBtn = document.querySelectorAll("button");

// Button event
calcBtn.forEach(number => {
    number.addEventListener("click", calculate);
})

function calculate() {
    console.log("check")
}
