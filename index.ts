const numEl = document.getElementById("inputNum") as HTMLInputElement;
const resultEl = document.getElementById("result") as HTMLParagraphElement;

const theNumber = Math.floor(Math.random() * 100) + 1;

function guess() {
    const guessNumber: number = numEl.valueAsNumber;
    if (isCorrect(guessNumber)) {
        resultEl.innerText = "Eltaláltad";
    }
    else {
        if (guessNumber < theNumber) {
            resultEl.innerText = "A szám nagyobb";
        }
        else {
            resultEl.innerText = "A szám kisebb";
        }
    }
}

function isCorrect(guessNumber: number): boolean {
    return guessNumber === theNumber;
}