
let counterValue = document.getElementById('Counter');
const negativeBtn = document.querySelector('#negative');
// const positiveBtn = document.querySelector('.positive');

const decrement = () => {
    // fetch the value
    let value = parseInt(counterValue.innerText);

    // update the value
    value = value - 5;

    // Set the Value
    counterValue.innerHTML = value;

}

function increment() {
    // fetch the value
    let value = parseInt(counterValue.innerText);

    // update the value
    value = value + 10;

    // Set the Value
    counterValue.innerText = value;

}

negativeBtn.addEventListener('click', decrement);
// positiveBtn.addEventListener('click', increment);
