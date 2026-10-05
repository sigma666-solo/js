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

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let group = document.getElementById("group").value;
    let average = document.getElementById("average").value;

    if (name === "" || age === "" || group === "" || average === "") {
        document.getElementById("result").textContent = "Заполните все поля!";
        return;
    }

    age = parseInt(age);
    average = parseFloat(average);

    if (age < 16 || age > 100) {
        document.getElementById("result").textContent = "Некорректный возраст!";
        return;
    }

    let status = getStudentStatus(average);

    let resultText = "Студент зарегистрирован\n\n";
    resultText += "Имя: " + name + "\n";
    resultText += "Возраст: " + age + "\n";
    resultText += "Группа: " + group + "\n";
    resultText += "Средний балл: " + average + "\n\n";
    resultText += "Статус: " + status;

    document.getElementById("result").innerHTML = "<pre>" + resultText + "</pre>";
});
