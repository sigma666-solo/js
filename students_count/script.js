let firstName = "Иван";
let lastName = "Петров";
let age = 19;
let city = "Москва";
let group = "ИС-101";
let isStudent = true;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(city);
console.log(group);
console.log(isStudent);

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof age);
console.log(typeof city);
console.log(typeof group);
console.log(typeof isStudent);

let grade1 = 5;
let grade2 = 4;
let grade3 = 5;
let grade4 = 3;
let grade5 = 4;

let sum = grade1 + grade2 + grade3 + grade4 + grade5;
let average = sum / 5;

console.log(sum);
console.log(average);

if (average === 5) {
  console.log("Отличная успеваемость");
} else if (average === 4) {
  console.log("Хорошая успеваемость");
} else if (average === 3) {
  console.log("Удовлетворительная успеваемость");
} else {
  console.log("Низкая успеваемость");
}

if (age >= 18) {
  console.log("Студент совершеннолетний");
} else {
  console.log("Студент несовершеннолетний");
}

if (age >= 18 && average >= 3) {
  console.log("Студент допущен к экзамену");
} else {
  console.log("Допуск не предоставлен");
}

for (let i = 1; i <= 5; i++) {
  console.log("Занятие №" + i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 7) continue;
  console.log(i);
}
