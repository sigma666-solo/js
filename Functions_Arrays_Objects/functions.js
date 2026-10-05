function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Ошибка: деление на ноль";
    }
    return a / b;
}

console.log("sum(10, 5) = " + sum(10, 5));
console.log("sum(20, 30) = " + sum(20, 30));

console.log("subtract(10, 5) = " + subtract(10, 5));
console.log("subtract(20, 8) = " + subtract(20, 8));

console.log("multiply(10, 5) = " + multiply(10, 5));
console.log("multiply(7, 3) = " + multiply(7, 3));

console.log("divide(10, 5) = " + divide(10, 5));
console.log("divide(20, 4) = " + divide(20, 4));

function square(number) {
    return number * number;
}

console.log("square(5) = " + square(5));
console.log("square(10) = " + square(10));
