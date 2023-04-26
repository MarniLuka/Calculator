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
        return;
    }

    if (displayText === "DE") {
        math.innerText = math.textContent.toString().slice(0,-1);
        return;
    }

    if (displayText === "=") {
        result.innerText = eval(math.textContent);
        return;
    }

    else {
        math.innerText += displayText;
        return;
    }
}

