let students = [
    {
        name: "Иван",
        age: 20,
        group: "ИСП-21",
        average: 4.5
    },
    {
        name: "Анна",
        age: 19,
        group: "ИСП-21",
        average: 4.8
    },
    {
        name: "Петр",
        age: 21,
        group: "ИСП-20",
        average: 3.5
    },
    {
        name: "Мария",
        age: 20,
        group: "ИСП-21",
        average: 4.2
    },
    {
        name: "Олег",
        age: 22,
        group: "ИСП-20",
        average: 2.8
    }
];

for (let i = 0; i < students.length; i++) {
    console.log("Имя: " + students[i].name);
    console.log("Возраст: " + students[i].age);
    console.log("Группа: " + students[i].group);
    console.log("Средний балл: " + students[i].average);
    console.log("---");
}

console.log("Студенты со средним баллом 4 и выше:");
for (let i = 0; i < students.length; i++) {
    if (students[i].average >= 4) {
        console.log(students[i].name + " - " + students[i].average);
    }
}
