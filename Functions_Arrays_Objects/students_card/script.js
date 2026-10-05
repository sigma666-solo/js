let student = {
    name: "Иван",
    age: 20,
    group: "ИСП-21",
    average: 4.5
};

document.getElementById("name").textContent = student.name;
document.getElementById("age").textContent = "Возраст: " + student.age;
document.getElementById("group").textContent = "Группа: " + student.group;
document.getElementById("average").textContent = "Средний балл: " + student.average;
