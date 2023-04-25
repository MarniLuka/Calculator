// Variables
const math = document.querySelector(".math");
const result = document.querySelector(".result");
const calcBtn = document.querySelectorAll("button");

// Button event
calcBtn.forEach(number => {
    number.addEventListener("click", calculate);
})

function calculate() {
    const displayText = this.innerText;

    if (displayText === "AC") {
        math.innerText = '';
        result.innerText = '';
    }

    if (displayText === "DE") {
        math.innerText = math.value.toString().slice(0,-1);
    }

    if (displayText === "=") {
        result.innerText = eval(math.value);
    }

    else {
        math.innerText += displayText;
    }
}

