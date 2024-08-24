let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;

}

function clearDisplay() {
    display.value = '';
}
function calculator() {
    try {
        display.value = eval(display.value);
    }

    catch (e) {
        display.value = 'Error';
    }
}

function Backspace() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}