function appendToDisplay(v) {
    document.getElementById('display').value += v; //0 = 0 + 1
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || ''; // Use eval carefully in production
    } catch(e) {
        display.value = 'Error';
    }
}