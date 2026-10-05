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
        average: 2.1
    }
];

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

function displayStudents(studentsToShow) {
    let output = document.getElementById("output");
    output.innerHTML = "";

    for (let i = 0; i < studentsToShow.length; i++) {
        let student = studentsToShow[i];
        let status = getStudentStatus(student.average);

        let card = document.createElement("div");
        card.className = "card";

        if (status === "Отличник") {
            card.classList.add("excellent");
        }

        let html = "<strong>" + student.name + "</strong><br>";
        html += "Возраст: " + student.age + "<br>";
        html += "Группа: " + student.group + "<br>";
        html += "Средний балл: " + student.average + "<br>";
        html += "Статус: " + status;

        if (student.average < 3) {
            html += "<br><span class='warning'>⚠ Внимание: низкая успеваемость!</span>";
        }

        card.innerHTML = html;
        output.appendChild(card);
    }
}

document.getElementById("showAll").addEventListener("click", function() {
    displayStudents(students);
});

document.getElementById("showExcellent").addEventListener("click", function() {
    let excellent = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].average >= 4.5) {
            excellent.push(students[i]);
        }
    }
    displayStudents(excellent);
});
