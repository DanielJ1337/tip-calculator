let billAmount = document.getElementById('bill-amount');
let customAmount = document.getElementById('custom');
let peopleCount = document.getElementById('people-count');
let tipPercentageContainer = document.querySelector(
    '.calculator__tip-container'
).children;
let formContainer = document.querySelector('.calculator__left-container');
let reset = document.getElementById('reset-button');

let tipOutput = document.getElementById('tip-output');
let perPerson = document.getElementById('per-person');

let value = 0;
let peopleNumber = 0;
let tipAmount = 0;
// ! Which functions do I need in order to solve the problem?
// * calculateTip
// * resetInput
// *

billAmount.addEventListener('change', (e) => {
    value = parseFloat(e.target.value);
    console.log(value);
});

peopleCount.addEventListener('change', (e) => {
    if (e.target.value === '') {
        peopleNumber = 0;
    } else {
        peopleNumber = parseFloat(e.target.value);
    }
});

for (element of tipPercentageContainer) {
    element.addEventListener('click', (e) => {
        tipAmount = parseFloat(e.target.innerHTML.slice(0, 2));
    });
}

customAmount.addEventListener('change', (e) => {
    tipAmount = parseFloat(e.target.value);
    console.log(tipAmount);
});

function calculateTip(value, peopleNumber, tipAmount) {
    tipOutput.innerHTML = (value * (tipAmount / 100)).toFixed(2);
    perPerson.innerHTML = ((value * (tipAmount / 100)) / peopleNumber).toFixed(
        2
    );
    value = 0;
    tipAmount = 0;
    peopleNumber = 0;
}

function resetInput() {
    value = 0;
    tipAmount = 0;
    peopleNumber = 0;
    tipOutput.innerHTML = (0).toFixed(2);
    perPerson.innerHTML = (0).toFixed(2);
}

reset.addEventListener('click', resetInput);

formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
        calculateTip(value, peopleNumber, tipAmount);
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // console.log(value, peopleNumber, tipAmount);
        calculateTip(value, peopleNumber, tipAmount);
    }
});
