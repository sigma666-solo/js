function getStudentStatus(average) {
    if (average >= 4.5) {
        return "Отличник";
    } else if (average >= 3.5) {
        return "Хорошист";
    } else if (average >= 2.5) {
        return "Удовлетворительно";
    } else {
        return "Неуспевает";
    }
}

console.log(getStudentStatus(4.8));
console.log(getStudentStatus(3.7));
console.log(getStudentStatus(2.2));
console.log(getStudentStatus(4.5));
console.log(getStudentStatus(3.5));
