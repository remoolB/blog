let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    // 防止连续输入运算符
    if (display.value === "" && operator === "-") {
        display.value += operator;
    } else if (display.value !== "" && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "错误";
    }
}

function showProgram() {
    display.value += "程";
}

