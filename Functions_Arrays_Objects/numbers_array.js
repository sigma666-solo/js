let numbers = [10, 25, 7, 40, 15, 30];

console.log("Все числа:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Сумма: " + sum);

let average = sum / numbers.length;
console.log("Среднее значение: " + average);

console.log("Числа больше 20:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 20) {
        console.log(numbers[i]);
    }
}
